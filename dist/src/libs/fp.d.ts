import * as E from 'fp-ts/Either';
import { Lazy } from 'fp-ts/function';
import * as TE from 'fp-ts/TaskEither';
import { Errors } from 'io-ts';
import * as t from 'io-ts';
export declare function valueOrThrow<E, A>(res: E.Either<E, A>): A;
export declare function valueOrThrowTE<E, R>(taskEither: TE.TaskEither<E, R>): Promise<R>;
export declare const errorsToError: (errors: t.Errors) => Error;
export declare function errorsToArray(errors: t.Errors): Error[];
export declare function decodeForFunction<T, U>(params: any, decode: (x: any) => E.Either<Errors, T>, fn: (params: T) => TE.TaskEither<Error, U>): Promise<U>;
export declare const logPipe: <T>(x: T) => T;
export declare const logTE: <E, A>(te: TE.TaskEither<E, A>) => TE.TaskEither<E, A>;
export declare const logE: <E, A>(te: E.Either<E, A>) => E.Either<E, A>;
export declare function taskEitherWithError<T>(f: Lazy<Promise<T>>): TE.TaskEither<Error, T>;
export declare const switchCase: <T extends string | number | symbol, U>(value: T, cases: Record<T, Lazy<U>>, def: Lazy<U>) => U;
export declare function assertNever(x: never): never;
export declare const assertEither: (condition: boolean, errorMessage: string) => E.Either<Error, null>;