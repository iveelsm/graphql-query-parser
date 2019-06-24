import { QueryExtractor, FragmentExtractor } from "./graphql";
import ParseResults from "./parseResults";
import { ReadStream } from "fs";
import Parser from './parser';

/**
 * Parses results from a ReadStream
 */
export default class ReadStreamParser implements Parser<ReadStream[], Promise<ParseResults>[]> {
    private queryExtractor: QueryExtractor
    private fragmentExtractor: FragmentExtractor

    public constructor() {
        this.queryExtractor = new QueryExtractor();
        this.fragmentExtractor = new FragmentExtractor();
    }

    /**
     * Parses multiple read streams and returns the [[ParseResult]] from each read stream
     * @param streams Streams that contain the information for parsing
     */
    public parse(streams: ReadStream[]): Promise<ParseResults>[] {
        try {
            return streams.map(async stream => {
                const result = await this.parseData(stream);
                if(result === null) {
                    throw new Error("fill in with defined error");
                }
                return result;
            });
        } catch(e) {
            return null;
        }
    }

    private parseData(stream: ReadStream): Promise<ParseResults> {
        return new Promise((resolve, reject) => {
            let results: ParseResults;
            stream.on('data', (data) => {
                results = this.extract(data);
            });
            stream.on('end', () => {
                resolve(results);
            });
            stream.on('error', (error) => {
                reject(error);
            })
        });
    }

    private extract(data: string): ParseResults {
        return {
            queryResults: this.queryExtractor.extract(data),
            fragmentResults: this.fragmentExtractor.extract(data)
        }
    }
}

