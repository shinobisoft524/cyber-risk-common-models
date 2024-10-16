
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Assessment
 * 
 */
export type Assessment = $Result.DefaultSelection<Prisma.$AssessmentPayload>
/**
 * Model AssessmentAssign
 * 
 */
export type AssessmentAssign = $Result.DefaultSelection<Prisma.$AssessmentAssignPayload>
/**
 * Model AssessmentQuestion
 * 
 */
export type AssessmentQuestion = $Result.DefaultSelection<Prisma.$AssessmentQuestionPayload>
/**
 * Model AssessmentQuestionAnswer
 * 
 */
export type AssessmentQuestionAnswer = $Result.DefaultSelection<Prisma.$AssessmentQuestionAnswerPayload>
/**
 * Model AssessmentQuestionAssign
 * 
 */
export type AssessmentQuestionAssign = $Result.DefaultSelection<Prisma.$AssessmentQuestionAssignPayload>
/**
 * Model Organisation
 * 
 */
export type Organisation = $Result.DefaultSelection<Prisma.$OrganisationPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model AuestionAnswer
 * 
 */
export type AuestionAnswer = $Result.DefaultSelection<Prisma.$AuestionAnswerPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QuestionType: {
  MultiChoise: 'MultiChoise',
  RatingScale: 'RatingScale',
  LikertScale: 'LikertScale',
  Matrix: 'Matrix',
  Dropdown: 'Dropdown',
  OpenEnded: 'OpenEnded',
  Ranking: 'Ranking',
  ClickMap: 'ClickMap',
  Slider: 'Slider',
  Benchmarkable: 'Benchmarkable',
  Dichotomous: 'Dichotomous'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]


export const TeamMemberLevel: {
  Level0: 'Level0',
  Level1: 'Level1',
  Level2: 'Level2',
  Level3: 'Level3',
  Level4: 'Level4',
  Level5: 'Level5',
  Level6: 'Level6',
  Level7: 'Level7',
  Level8: 'Level8',
  Level9: 'Level9',
  Level10: 'Level10'
};

export type TeamMemberLevel = (typeof TeamMemberLevel)[keyof typeof TeamMemberLevel]

}

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

export type TeamMemberLevel = $Enums.TeamMemberLevel

export const TeamMemberLevel: typeof $Enums.TeamMemberLevel

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assessments
 * const assessments = await prisma.assessment.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Assessments
   * const assessments = await prisma.assessment.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.assessment`: Exposes CRUD operations for the **Assessment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assessments
    * const assessments = await prisma.assessment.findMany()
    * ```
    */
  get assessment(): Prisma.AssessmentDelegate<ExtArgs>;

  /**
   * `prisma.assessmentAssign`: Exposes CRUD operations for the **AssessmentAssign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentAssigns
    * const assessmentAssigns = await prisma.assessmentAssign.findMany()
    * ```
    */
  get assessmentAssign(): Prisma.AssessmentAssignDelegate<ExtArgs>;

  /**
   * `prisma.assessmentQuestion`: Exposes CRUD operations for the **AssessmentQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentQuestions
    * const assessmentQuestions = await prisma.assessmentQuestion.findMany()
    * ```
    */
  get assessmentQuestion(): Prisma.AssessmentQuestionDelegate<ExtArgs>;

  /**
   * `prisma.assessmentQuestionAnswer`: Exposes CRUD operations for the **AssessmentQuestionAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentQuestionAnswers
    * const assessmentQuestionAnswers = await prisma.assessmentQuestionAnswer.findMany()
    * ```
    */
  get assessmentQuestionAnswer(): Prisma.AssessmentQuestionAnswerDelegate<ExtArgs>;

  /**
   * `prisma.assessmentQuestionAssign`: Exposes CRUD operations for the **AssessmentQuestionAssign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentQuestionAssigns
    * const assessmentQuestionAssigns = await prisma.assessmentQuestionAssign.findMany()
    * ```
    */
  get assessmentQuestionAssign(): Prisma.AssessmentQuestionAssignDelegate<ExtArgs>;

  /**
   * `prisma.organisation`: Exposes CRUD operations for the **Organisation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organisations
    * const organisations = await prisma.organisation.findMany()
    * ```
    */
  get organisation(): Prisma.OrganisationDelegate<ExtArgs>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs>;

  /**
   * `prisma.auestionAnswer`: Exposes CRUD operations for the **AuestionAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuestionAnswers
    * const auestionAnswers = await prisma.auestionAnswer.findMany()
    * ```
    */
  get auestionAnswer(): Prisma.AuestionAnswerDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Assessment: 'Assessment',
    AssessmentAssign: 'AssessmentAssign',
    AssessmentQuestion: 'AssessmentQuestion',
    AssessmentQuestionAnswer: 'AssessmentQuestionAnswer',
    AssessmentQuestionAssign: 'AssessmentQuestionAssign',
    Organisation: 'Organisation',
    Question: 'Question',
    AuestionAnswer: 'AuestionAnswer',
    Role: 'Role',
    Team: 'Team',
    TeamMember: 'TeamMember',
    User: 'User',
    UserRole: 'UserRole'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "assessment" | "assessmentAssign" | "assessmentQuestion" | "assessmentQuestionAnswer" | "assessmentQuestionAssign" | "organisation" | "question" | "auestionAnswer" | "role" | "team" | "teamMember" | "user" | "userRole"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Assessment: {
        payload: Prisma.$AssessmentPayload<ExtArgs>
        fields: Prisma.AssessmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findFirst: {
            args: Prisma.AssessmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          findMany: {
            args: Prisma.AssessmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>[]
          }
          create: {
            args: Prisma.AssessmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          createMany: {
            args: Prisma.AssessmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssessmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          update: {
            args: Prisma.AssessmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessment>
          }
          groupBy: {
            args: Prisma.AssessmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentCountAggregateOutputType> | number
          }
        }
      }
      AssessmentAssign: {
        payload: Prisma.$AssessmentAssignPayload<ExtArgs>
        fields: Prisma.AssessmentAssignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentAssignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAssignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentAssignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAssignPayload>
          }
          findFirst: {
            args: Prisma.AssessmentAssignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAssignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentAssignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAssignPayload>
          }
          findMany: {
            args: Prisma.AssessmentAssignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAssignPayload>[]
          }
          create: {
            args: Prisma.AssessmentAssignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAssignPayload>
          }
          createMany: {
            args: Prisma.AssessmentAssignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssessmentAssignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAssignPayload>
          }
          update: {
            args: Prisma.AssessmentAssignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAssignPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentAssignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentAssignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentAssignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentAssignPayload>
          }
          aggregate: {
            args: Prisma.AssessmentAssignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentAssign>
          }
          groupBy: {
            args: Prisma.AssessmentAssignGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentAssignGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentAssignCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentAssignCountAggregateOutputType> | number
          }
        }
      }
      AssessmentQuestion: {
        payload: Prisma.$AssessmentQuestionPayload<ExtArgs>
        fields: Prisma.AssessmentQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          findFirst: {
            args: Prisma.AssessmentQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          findMany: {
            args: Prisma.AssessmentQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>[]
          }
          create: {
            args: Prisma.AssessmentQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          createMany: {
            args: Prisma.AssessmentQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssessmentQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          update: {
            args: Prisma.AssessmentQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionPayload>
          }
          aggregate: {
            args: Prisma.AssessmentQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentQuestion>
          }
          groupBy: {
            args: Prisma.AssessmentQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentQuestionCountAggregateOutputType> | number
          }
        }
      }
      AssessmentQuestionAnswer: {
        payload: Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>
        fields: Prisma.AssessmentQuestionAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentQuestionAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentQuestionAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAnswerPayload>
          }
          findFirst: {
            args: Prisma.AssessmentQuestionAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentQuestionAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAnswerPayload>
          }
          findMany: {
            args: Prisma.AssessmentQuestionAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAnswerPayload>[]
          }
          create: {
            args: Prisma.AssessmentQuestionAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAnswerPayload>
          }
          createMany: {
            args: Prisma.AssessmentQuestionAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssessmentQuestionAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAnswerPayload>
          }
          update: {
            args: Prisma.AssessmentQuestionAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAnswerPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentQuestionAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentQuestionAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentQuestionAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAnswerPayload>
          }
          aggregate: {
            args: Prisma.AssessmentQuestionAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentQuestionAnswer>
          }
          groupBy: {
            args: Prisma.AssessmentQuestionAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentQuestionAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentQuestionAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentQuestionAnswerCountAggregateOutputType> | number
          }
        }
      }
      AssessmentQuestionAssign: {
        payload: Prisma.$AssessmentQuestionAssignPayload<ExtArgs>
        fields: Prisma.AssessmentQuestionAssignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentQuestionAssignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAssignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentQuestionAssignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAssignPayload>
          }
          findFirst: {
            args: Prisma.AssessmentQuestionAssignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAssignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentQuestionAssignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAssignPayload>
          }
          findMany: {
            args: Prisma.AssessmentQuestionAssignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAssignPayload>[]
          }
          create: {
            args: Prisma.AssessmentQuestionAssignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAssignPayload>
          }
          createMany: {
            args: Prisma.AssessmentQuestionAssignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssessmentQuestionAssignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAssignPayload>
          }
          update: {
            args: Prisma.AssessmentQuestionAssignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAssignPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentQuestionAssignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentQuestionAssignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentQuestionAssignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentQuestionAssignPayload>
          }
          aggregate: {
            args: Prisma.AssessmentQuestionAssignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentQuestionAssign>
          }
          groupBy: {
            args: Prisma.AssessmentQuestionAssignGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentQuestionAssignGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentQuestionAssignCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentQuestionAssignCountAggregateOutputType> | number
          }
        }
      }
      Organisation: {
        payload: Prisma.$OrganisationPayload<ExtArgs>
        fields: Prisma.OrganisationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganisationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganisationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          findFirst: {
            args: Prisma.OrganisationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganisationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          findMany: {
            args: Prisma.OrganisationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>[]
          }
          create: {
            args: Prisma.OrganisationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          createMany: {
            args: Prisma.OrganisationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganisationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          update: {
            args: Prisma.OrganisationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          deleteMany: {
            args: Prisma.OrganisationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganisationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganisationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganisationPayload>
          }
          aggregate: {
            args: Prisma.OrganisationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganisation>
          }
          groupBy: {
            args: Prisma.OrganisationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganisationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganisationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganisationCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      AuestionAnswer: {
        payload: Prisma.$AuestionAnswerPayload<ExtArgs>
        fields: Prisma.AuestionAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuestionAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuestionAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuestionAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuestionAnswerPayload>
          }
          findFirst: {
            args: Prisma.AuestionAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuestionAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuestionAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuestionAnswerPayload>
          }
          findMany: {
            args: Prisma.AuestionAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuestionAnswerPayload>[]
          }
          create: {
            args: Prisma.AuestionAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuestionAnswerPayload>
          }
          createMany: {
            args: Prisma.AuestionAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuestionAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuestionAnswerPayload>
          }
          update: {
            args: Prisma.AuestionAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuestionAnswerPayload>
          }
          deleteMany: {
            args: Prisma.AuestionAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuestionAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuestionAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuestionAnswerPayload>
          }
          aggregate: {
            args: Prisma.AuestionAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuestionAnswer>
          }
          groupBy: {
            args: Prisma.AuestionAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuestionAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuestionAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AuestionAnswerCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AssessmentCountOutputType
   */

  export type AssessmentCountOutputType = {
    AssessmentAssign: number
    AssessmentQuestionAssign: number
    AssessmentQuestion: number
  }

  export type AssessmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssessmentAssign?: boolean | AssessmentCountOutputTypeCountAssessmentAssignArgs
    AssessmentQuestionAssign?: boolean | AssessmentCountOutputTypeCountAssessmentQuestionAssignArgs
    AssessmentQuestion?: boolean | AssessmentCountOutputTypeCountAssessmentQuestionArgs
  }

  // Custom InputTypes
  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentCountOutputType
     */
    select?: AssessmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeCountAssessmentAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAssignWhereInput
  }

  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeCountAssessmentQuestionAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionAssignWhereInput
  }

  /**
   * AssessmentCountOutputType without action
   */
  export type AssessmentCountOutputTypeCountAssessmentQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionWhereInput
  }


  /**
   * Count Type AssessmentAssignCountOutputType
   */

  export type AssessmentAssignCountOutputType = {
    AssessmentQuestionAssign: number
  }

  export type AssessmentAssignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssessmentQuestionAssign?: boolean | AssessmentAssignCountOutputTypeCountAssessmentQuestionAssignArgs
  }

  // Custom InputTypes
  /**
   * AssessmentAssignCountOutputType without action
   */
  export type AssessmentAssignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssignCountOutputType
     */
    select?: AssessmentAssignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessmentAssignCountOutputType without action
   */
  export type AssessmentAssignCountOutputTypeCountAssessmentQuestionAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionAssignWhereInput
  }


  /**
   * Count Type AssessmentQuestionCountOutputType
   */

  export type AssessmentQuestionCountOutputType = {
    AssessmentQuestionAssign: number
  }

  export type AssessmentQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssessmentQuestionAssign?: boolean | AssessmentQuestionCountOutputTypeCountAssessmentQuestionAssignArgs
  }

  // Custom InputTypes
  /**
   * AssessmentQuestionCountOutputType without action
   */
  export type AssessmentQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionCountOutputType
     */
    select?: AssessmentQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessmentQuestionCountOutputType without action
   */
  export type AssessmentQuestionCountOutputTypeCountAssessmentQuestionAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionAssignWhereInput
  }


  /**
   * Count Type AssessmentQuestionAssignCountOutputType
   */

  export type AssessmentQuestionAssignCountOutputType = {
    AssessmentQuestionAnswer: number
  }

  export type AssessmentQuestionAssignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssessmentQuestionAnswer?: boolean | AssessmentQuestionAssignCountOutputTypeCountAssessmentQuestionAnswerArgs
  }

  // Custom InputTypes
  /**
   * AssessmentQuestionAssignCountOutputType without action
   */
  export type AssessmentQuestionAssignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssignCountOutputType
     */
    select?: AssessmentQuestionAssignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessmentQuestionAssignCountOutputType without action
   */
  export type AssessmentQuestionAssignCountOutputTypeCountAssessmentQuestionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionAnswerWhereInput
  }


  /**
   * Count Type OrganisationCountOutputType
   */

  export type OrganisationCountOutputType = {
    Assessment: number
    Team: number
  }

  export type OrganisationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Assessment?: boolean | OrganisationCountOutputTypeCountAssessmentArgs
    Team?: boolean | OrganisationCountOutputTypeCountTeamArgs
  }

  // Custom InputTypes
  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganisationCountOutputType
     */
    select?: OrganisationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeCountAssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
  }

  /**
   * OrganisationCountOutputType without action
   */
  export type OrganisationCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    AssessmentQuestion: number
    AuestionAnswer: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssessmentQuestion?: boolean | QuestionCountOutputTypeCountAssessmentQuestionArgs
    AuestionAnswer?: boolean | QuestionCountOutputTypeCountAuestionAnswerArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAssessmentQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAuestionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuestionAnswerWhereInput
  }


  /**
   * Count Type AuestionAnswerCountOutputType
   */

  export type AuestionAnswerCountOutputType = {
    AssessmentQuestionAnswer: number
  }

  export type AuestionAnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssessmentQuestionAnswer?: boolean | AuestionAnswerCountOutputTypeCountAssessmentQuestionAnswerArgs
  }

  // Custom InputTypes
  /**
   * AuestionAnswerCountOutputType without action
   */
  export type AuestionAnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswerCountOutputType
     */
    select?: AuestionAnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuestionAnswerCountOutputType without action
   */
  export type AuestionAnswerCountOutputTypeCountAssessmentQuestionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionAnswerWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    UserRole: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | RoleCountOutputTypeCountUserRoleArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    AssessmentAssign: number
    AssessmentQuestionAssign: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssessmentAssign?: boolean | TeamCountOutputTypeCountAssessmentAssignArgs
    AssessmentQuestionAssign?: boolean | TeamCountOutputTypeCountAssessmentQuestionAssignArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAssessmentAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAssignWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAssessmentQuestionAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionAssignWhereInput
  }


  /**
   * Count Type TeamMemberCountOutputType
   */

  export type TeamMemberCountOutputType = {
    AssessmentAssign: number
    AssessmentQuestionAssign: number
  }

  export type TeamMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssessmentAssign?: boolean | TeamMemberCountOutputTypeCountAssessmentAssignArgs
    AssessmentQuestionAssign?: boolean | TeamMemberCountOutputTypeCountAssessmentQuestionAssignArgs
  }

  // Custom InputTypes
  /**
   * TeamMemberCountOutputType without action
   */
  export type TeamMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMemberCountOutputType
     */
    select?: TeamMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamMemberCountOutputType without action
   */
  export type TeamMemberCountOutputTypeCountAssessmentAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAssignWhereInput
  }

  /**
   * TeamMemberCountOutputType without action
   */
  export type TeamMemberCountOutputTypeCountAssessmentQuestionAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionAssignWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserRole: number
    TeamMember: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | UserCountOutputTypeCountUserRoleArgs
    TeamMember?: boolean | UserCountOutputTypeCountTeamMemberArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Assessment
   */

  export type AggregateAssessment = {
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  export type AssessmentAvgAggregateOutputType = {
    id: number | null
    organisationId: number | null
  }

  export type AssessmentSumAggregateOutputType = {
    id: number | null
    organisationId: number | null
  }

  export type AssessmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    logo: string | null
    organisationId: number | null
    password: string | null
    rememberToken: string | null
    isActive: boolean | null
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    logo: string | null
    organisationId: number | null
    password: string | null
    rememberToken: string | null
    isActive: boolean | null
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    logo: number
    organisationId: number
    password: number
    rememberToken: number
    isActive: number
    secretToken: number
    tfaToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssessmentAvgAggregateInputType = {
    id?: true
    organisationId?: true
  }

  export type AssessmentSumAggregateInputType = {
    id?: true
    organisationId?: true
  }

  export type AssessmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    logo?: true
    organisationId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    logo?: true
    organisationId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    logo?: true
    organisationId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssessmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessment to aggregate.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assessments
    **/
    _count?: true | AssessmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentMaxAggregateInputType
  }

  export type GetAssessmentAggregateType<T extends AssessmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessment[P]>
      : GetScalarType<T[P], AggregateAssessment[P]>
  }




  export type AssessmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithAggregationInput | AssessmentOrderByWithAggregationInput[]
    by: AssessmentScalarFieldEnum[] | AssessmentScalarFieldEnum
    having?: AssessmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentCountAggregateInputType | true
    _avg?: AssessmentAvgAggregateInputType
    _sum?: AssessmentSumAggregateInputType
    _min?: AssessmentMinAggregateInputType
    _max?: AssessmentMaxAggregateInputType
  }

  export type AssessmentGroupByOutputType = {
    id: number
    name: string
    description: string | null
    logo: string | null
    organisationId: number
    password: string | null
    rememberToken: string | null
    isActive: boolean
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: AssessmentCountAggregateOutputType | null
    _avg: AssessmentAvgAggregateOutputType | null
    _sum: AssessmentSumAggregateOutputType | null
    _min: AssessmentMinAggregateOutputType | null
    _max: AssessmentMaxAggregateOutputType | null
  }

  type GetAssessmentGroupByPayload<T extends AssessmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    logo?: boolean
    organisationId?: boolean
    password?: boolean
    rememberToken?: boolean
    isActive?: boolean
    secretToken?: boolean
    tfaToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    AssessmentAssign?: boolean | Assessment$AssessmentAssignArgs<ExtArgs>
    AssessmentQuestionAssign?: boolean | Assessment$AssessmentQuestionAssignArgs<ExtArgs>
    AssessmentQuestion?: boolean | Assessment$AssessmentQuestionArgs<ExtArgs>
    _count?: boolean | AssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessment"]>


  export type AssessmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    logo?: boolean
    organisationId?: boolean
    password?: boolean
    rememberToken?: boolean
    isActive?: boolean
    secretToken?: boolean
    tfaToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssessmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    AssessmentAssign?: boolean | Assessment$AssessmentAssignArgs<ExtArgs>
    AssessmentQuestionAssign?: boolean | Assessment$AssessmentQuestionAssignArgs<ExtArgs>
    AssessmentQuestion?: boolean | Assessment$AssessmentQuestionArgs<ExtArgs>
    _count?: boolean | AssessmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AssessmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assessment"
    objects: {
      Organisation: Prisma.$OrganisationPayload<ExtArgs>
      AssessmentAssign: Prisma.$AssessmentAssignPayload<ExtArgs>[]
      AssessmentQuestionAssign: Prisma.$AssessmentQuestionAssignPayload<ExtArgs>[]
      AssessmentQuestion: Prisma.$AssessmentQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      logo: string | null
      organisationId: number
      password: string | null
      rememberToken: string | null
      isActive: boolean
      secretToken: string | null
      tfaToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assessment"]>
    composites: {}
  }

  type AssessmentGetPayload<S extends boolean | null | undefined | AssessmentDefaultArgs> = $Result.GetResult<Prisma.$AssessmentPayload, S>

  type AssessmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentCountAggregateInputType | true
    }

  export interface AssessmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assessment'], meta: { name: 'Assessment' } }
    /**
     * Find zero or one Assessment that matches the filter.
     * @param {AssessmentFindUniqueArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentFindUniqueArgs>(args: SelectSubset<T, AssessmentFindUniqueArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Assessment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssessmentFindUniqueOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Assessment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentFindFirstArgs>(args?: SelectSubset<T, AssessmentFindFirstArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Assessment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindFirstOrThrowArgs} args - Arguments to find a Assessment
     * @example
     * // Get one Assessment
     * const assessment = await prisma.assessment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Assessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assessments
     * const assessments = await prisma.assessment.findMany()
     * 
     * // Get first 10 Assessments
     * const assessments = await prisma.assessment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentWithIdOnly = await prisma.assessment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentFindManyArgs>(args?: SelectSubset<T, AssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Assessment.
     * @param {AssessmentCreateArgs} args - Arguments to create a Assessment.
     * @example
     * // Create one Assessment
     * const Assessment = await prisma.assessment.create({
     *   data: {
     *     // ... data to create a Assessment
     *   }
     * })
     * 
     */
    create<T extends AssessmentCreateArgs>(args: SelectSubset<T, AssessmentCreateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Assessments.
     * @param {AssessmentCreateManyArgs} args - Arguments to create many Assessments.
     * @example
     * // Create many Assessments
     * const assessment = await prisma.assessment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentCreateManyArgs>(args?: SelectSubset<T, AssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assessment.
     * @param {AssessmentDeleteArgs} args - Arguments to delete one Assessment.
     * @example
     * // Delete one Assessment
     * const Assessment = await prisma.assessment.delete({
     *   where: {
     *     // ... filter to delete one Assessment
     *   }
     * })
     * 
     */
    delete<T extends AssessmentDeleteArgs>(args: SelectSubset<T, AssessmentDeleteArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Assessment.
     * @param {AssessmentUpdateArgs} args - Arguments to update one Assessment.
     * @example
     * // Update one Assessment
     * const assessment = await prisma.assessment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentUpdateArgs>(args: SelectSubset<T, AssessmentUpdateArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Assessments.
     * @param {AssessmentDeleteManyArgs} args - Arguments to filter Assessments to delete.
     * @example
     * // Delete a few Assessments
     * const { count } = await prisma.assessment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentDeleteManyArgs>(args?: SelectSubset<T, AssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assessments
     * const assessment = await prisma.assessment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentUpdateManyArgs>(args: SelectSubset<T, AssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assessment.
     * @param {AssessmentUpsertArgs} args - Arguments to update or create a Assessment.
     * @example
     * // Update or create a Assessment
     * const assessment = await prisma.assessment.upsert({
     *   create: {
     *     // ... data to create a Assessment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assessment we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentUpsertArgs>(args: SelectSubset<T, AssessmentUpsertArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Assessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentCountArgs} args - Arguments to filter Assessments to count.
     * @example
     * // Count the number of Assessments
     * const count = await prisma.assessment.count({
     *   where: {
     *     // ... the filter for the Assessments we want to count
     *   }
     * })
    **/
    count<T extends AssessmentCountArgs>(
      args?: Subset<T, AssessmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentAggregateArgs>(args: Subset<T, AssessmentAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAggregateType<T>>

    /**
     * Group by Assessment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assessment model
   */
  readonly fields: AssessmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assessment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organisation<T extends OrganisationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganisationDefaultArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AssessmentAssign<T extends Assessment$AssessmentAssignArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$AssessmentAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "findMany"> | Null>
    AssessmentQuestionAssign<T extends Assessment$AssessmentQuestionAssignArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$AssessmentQuestionAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "findMany"> | Null>
    AssessmentQuestion<T extends Assessment$AssessmentQuestionArgs<ExtArgs> = {}>(args?: Subset<T, Assessment$AssessmentQuestionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assessment model
   */ 
  interface AssessmentFieldRefs {
    readonly id: FieldRef<"Assessment", 'Int'>
    readonly name: FieldRef<"Assessment", 'String'>
    readonly description: FieldRef<"Assessment", 'String'>
    readonly logo: FieldRef<"Assessment", 'String'>
    readonly organisationId: FieldRef<"Assessment", 'Int'>
    readonly password: FieldRef<"Assessment", 'String'>
    readonly rememberToken: FieldRef<"Assessment", 'String'>
    readonly isActive: FieldRef<"Assessment", 'Boolean'>
    readonly secretToken: FieldRef<"Assessment", 'String'>
    readonly tfaToken: FieldRef<"Assessment", 'String'>
    readonly createdAt: FieldRef<"Assessment", 'DateTime'>
    readonly updatedAt: FieldRef<"Assessment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assessment findUnique
   */
  export type AssessmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findUniqueOrThrow
   */
  export type AssessmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment findFirst
   */
  export type AssessmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findFirstOrThrow
   */
  export type AssessmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessment to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assessments.
     */
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment findMany
   */
  export type AssessmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter, which Assessments to fetch.
     */
    where?: AssessmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assessments to fetch.
     */
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assessments.
     */
    cursor?: AssessmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assessments.
     */
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Assessment create
   */
  export type AssessmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assessment.
     */
    data: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
  }

  /**
   * Assessment createMany
   */
  export type AssessmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assessments.
     */
    data: AssessmentCreateManyInput | AssessmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assessment update
   */
  export type AssessmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assessment.
     */
    data: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
    /**
     * Choose, which Assessment to update.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment updateMany
   */
  export type AssessmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assessments.
     */
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyInput>
    /**
     * Filter which Assessments to update
     */
    where?: AssessmentWhereInput
  }

  /**
   * Assessment upsert
   */
  export type AssessmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assessment to update in case it exists.
     */
    where: AssessmentWhereUniqueInput
    /**
     * In case the Assessment found by the `where` argument doesn't exist, create a new Assessment with this data.
     */
    create: XOR<AssessmentCreateInput, AssessmentUncheckedCreateInput>
    /**
     * In case the Assessment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentUpdateInput, AssessmentUncheckedUpdateInput>
  }

  /**
   * Assessment delete
   */
  export type AssessmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    /**
     * Filter which Assessment to delete.
     */
    where: AssessmentWhereUniqueInput
  }

  /**
   * Assessment deleteMany
   */
  export type AssessmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assessments to delete
     */
    where?: AssessmentWhereInput
  }

  /**
   * Assessment.AssessmentAssign
   */
  export type Assessment$AssessmentAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    where?: AssessmentAssignWhereInput
    orderBy?: AssessmentAssignOrderByWithRelationInput | AssessmentAssignOrderByWithRelationInput[]
    cursor?: AssessmentAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentAssignScalarFieldEnum | AssessmentAssignScalarFieldEnum[]
  }

  /**
   * Assessment.AssessmentQuestionAssign
   */
  export type Assessment$AssessmentQuestionAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    where?: AssessmentQuestionAssignWhereInput
    orderBy?: AssessmentQuestionAssignOrderByWithRelationInput | AssessmentQuestionAssignOrderByWithRelationInput[]
    cursor?: AssessmentQuestionAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentQuestionAssignScalarFieldEnum | AssessmentQuestionAssignScalarFieldEnum[]
  }

  /**
   * Assessment.AssessmentQuestion
   */
  export type Assessment$AssessmentQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    where?: AssessmentQuestionWhereInput
    orderBy?: AssessmentQuestionOrderByWithRelationInput | AssessmentQuestionOrderByWithRelationInput[]
    cursor?: AssessmentQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentQuestionScalarFieldEnum | AssessmentQuestionScalarFieldEnum[]
  }

  /**
   * Assessment without action
   */
  export type AssessmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentAssign
   */

  export type AggregateAssessmentAssign = {
    _count: AssessmentAssignCountAggregateOutputType | null
    _avg: AssessmentAssignAvgAggregateOutputType | null
    _sum: AssessmentAssignSumAggregateOutputType | null
    _min: AssessmentAssignMinAggregateOutputType | null
    _max: AssessmentAssignMaxAggregateOutputType | null
  }

  export type AssessmentAssignAvgAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    teamId: number | null
    memberId: number | null
  }

  export type AssessmentAssignSumAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    teamId: number | null
    memberId: number | null
  }

  export type AssessmentAssignMinAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    teamId: number | null
    memberId: number | null
    password: string | null
    rememberToken: string | null
    isActive: boolean | null
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentAssignMaxAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    teamId: number | null
    memberId: number | null
    password: string | null
    rememberToken: string | null
    isActive: boolean | null
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentAssignCountAggregateOutputType = {
    id: number
    assessmentId: number
    teamId: number
    memberId: number
    password: number
    rememberToken: number
    isActive: number
    secretToken: number
    tfaToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssessmentAssignAvgAggregateInputType = {
    id?: true
    assessmentId?: true
    teamId?: true
    memberId?: true
  }

  export type AssessmentAssignSumAggregateInputType = {
    id?: true
    assessmentId?: true
    teamId?: true
    memberId?: true
  }

  export type AssessmentAssignMinAggregateInputType = {
    id?: true
    assessmentId?: true
    teamId?: true
    memberId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentAssignMaxAggregateInputType = {
    id?: true
    assessmentId?: true
    teamId?: true
    memberId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentAssignCountAggregateInputType = {
    id?: true
    assessmentId?: true
    teamId?: true
    memberId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssessmentAssignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentAssign to aggregate.
     */
    where?: AssessmentAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAssigns to fetch.
     */
    orderBy?: AssessmentAssignOrderByWithRelationInput | AssessmentAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentAssigns
    **/
    _count?: true | AssessmentAssignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentAssignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentAssignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentAssignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentAssignMaxAggregateInputType
  }

  export type GetAssessmentAssignAggregateType<T extends AssessmentAssignAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentAssign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentAssign[P]>
      : GetScalarType<T[P], AggregateAssessmentAssign[P]>
  }




  export type AssessmentAssignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentAssignWhereInput
    orderBy?: AssessmentAssignOrderByWithAggregationInput | AssessmentAssignOrderByWithAggregationInput[]
    by: AssessmentAssignScalarFieldEnum[] | AssessmentAssignScalarFieldEnum
    having?: AssessmentAssignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentAssignCountAggregateInputType | true
    _avg?: AssessmentAssignAvgAggregateInputType
    _sum?: AssessmentAssignSumAggregateInputType
    _min?: AssessmentAssignMinAggregateInputType
    _max?: AssessmentAssignMaxAggregateInputType
  }

  export type AssessmentAssignGroupByOutputType = {
    id: number
    assessmentId: number
    teamId: number
    memberId: number
    password: string | null
    rememberToken: string | null
    isActive: boolean
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: AssessmentAssignCountAggregateOutputType | null
    _avg: AssessmentAssignAvgAggregateOutputType | null
    _sum: AssessmentAssignSumAggregateOutputType | null
    _min: AssessmentAssignMinAggregateOutputType | null
    _max: AssessmentAssignMaxAggregateOutputType | null
  }

  type GetAssessmentAssignGroupByPayload<T extends AssessmentAssignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentAssignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentAssignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentAssignGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentAssignGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentAssignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    teamId?: boolean
    memberId?: boolean
    password?: boolean
    rememberToken?: boolean
    isActive?: boolean
    secretToken?: boolean
    tfaToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    Team?: boolean | TeamDefaultArgs<ExtArgs>
    Member?: boolean | TeamMemberDefaultArgs<ExtArgs>
    AssessmentQuestionAssign?: boolean | AssessmentAssign$AssessmentQuestionAssignArgs<ExtArgs>
    _count?: boolean | AssessmentAssignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentAssign"]>


  export type AssessmentAssignSelectScalar = {
    id?: boolean
    assessmentId?: boolean
    teamId?: boolean
    memberId?: boolean
    password?: boolean
    rememberToken?: boolean
    isActive?: boolean
    secretToken?: boolean
    tfaToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssessmentAssignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    Team?: boolean | TeamDefaultArgs<ExtArgs>
    Member?: boolean | TeamMemberDefaultArgs<ExtArgs>
    AssessmentQuestionAssign?: boolean | AssessmentAssign$AssessmentQuestionAssignArgs<ExtArgs>
    _count?: boolean | AssessmentAssignCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AssessmentAssignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentAssign"
    objects: {
      Assessment: Prisma.$AssessmentPayload<ExtArgs>
      Team: Prisma.$TeamPayload<ExtArgs>
      Member: Prisma.$TeamMemberPayload<ExtArgs>
      AssessmentQuestionAssign: Prisma.$AssessmentQuestionAssignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assessmentId: number
      teamId: number
      memberId: number
      password: string | null
      rememberToken: string | null
      isActive: boolean
      secretToken: string | null
      tfaToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assessmentAssign"]>
    composites: {}
  }

  type AssessmentAssignGetPayload<S extends boolean | null | undefined | AssessmentAssignDefaultArgs> = $Result.GetResult<Prisma.$AssessmentAssignPayload, S>

  type AssessmentAssignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentAssignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentAssignCountAggregateInputType | true
    }

  export interface AssessmentAssignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentAssign'], meta: { name: 'AssessmentAssign' } }
    /**
     * Find zero or one AssessmentAssign that matches the filter.
     * @param {AssessmentAssignFindUniqueArgs} args - Arguments to find a AssessmentAssign
     * @example
     * // Get one AssessmentAssign
     * const assessmentAssign = await prisma.assessmentAssign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentAssignFindUniqueArgs>(args: SelectSubset<T, AssessmentAssignFindUniqueArgs<ExtArgs>>): Prisma__AssessmentAssignClient<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AssessmentAssign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssessmentAssignFindUniqueOrThrowArgs} args - Arguments to find a AssessmentAssign
     * @example
     * // Get one AssessmentAssign
     * const assessmentAssign = await prisma.assessmentAssign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentAssignFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentAssignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentAssignClient<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AssessmentAssign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAssignFindFirstArgs} args - Arguments to find a AssessmentAssign
     * @example
     * // Get one AssessmentAssign
     * const assessmentAssign = await prisma.assessmentAssign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentAssignFindFirstArgs>(args?: SelectSubset<T, AssessmentAssignFindFirstArgs<ExtArgs>>): Prisma__AssessmentAssignClient<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AssessmentAssign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAssignFindFirstOrThrowArgs} args - Arguments to find a AssessmentAssign
     * @example
     * // Get one AssessmentAssign
     * const assessmentAssign = await prisma.assessmentAssign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentAssignFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentAssignFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentAssignClient<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AssessmentAssigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAssignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentAssigns
     * const assessmentAssigns = await prisma.assessmentAssign.findMany()
     * 
     * // Get first 10 AssessmentAssigns
     * const assessmentAssigns = await prisma.assessmentAssign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentAssignWithIdOnly = await prisma.assessmentAssign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentAssignFindManyArgs>(args?: SelectSubset<T, AssessmentAssignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AssessmentAssign.
     * @param {AssessmentAssignCreateArgs} args - Arguments to create a AssessmentAssign.
     * @example
     * // Create one AssessmentAssign
     * const AssessmentAssign = await prisma.assessmentAssign.create({
     *   data: {
     *     // ... data to create a AssessmentAssign
     *   }
     * })
     * 
     */
    create<T extends AssessmentAssignCreateArgs>(args: SelectSubset<T, AssessmentAssignCreateArgs<ExtArgs>>): Prisma__AssessmentAssignClient<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AssessmentAssigns.
     * @param {AssessmentAssignCreateManyArgs} args - Arguments to create many AssessmentAssigns.
     * @example
     * // Create many AssessmentAssigns
     * const assessmentAssign = await prisma.assessmentAssign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentAssignCreateManyArgs>(args?: SelectSubset<T, AssessmentAssignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssessmentAssign.
     * @param {AssessmentAssignDeleteArgs} args - Arguments to delete one AssessmentAssign.
     * @example
     * // Delete one AssessmentAssign
     * const AssessmentAssign = await prisma.assessmentAssign.delete({
     *   where: {
     *     // ... filter to delete one AssessmentAssign
     *   }
     * })
     * 
     */
    delete<T extends AssessmentAssignDeleteArgs>(args: SelectSubset<T, AssessmentAssignDeleteArgs<ExtArgs>>): Prisma__AssessmentAssignClient<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AssessmentAssign.
     * @param {AssessmentAssignUpdateArgs} args - Arguments to update one AssessmentAssign.
     * @example
     * // Update one AssessmentAssign
     * const assessmentAssign = await prisma.assessmentAssign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentAssignUpdateArgs>(args: SelectSubset<T, AssessmentAssignUpdateArgs<ExtArgs>>): Prisma__AssessmentAssignClient<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AssessmentAssigns.
     * @param {AssessmentAssignDeleteManyArgs} args - Arguments to filter AssessmentAssigns to delete.
     * @example
     * // Delete a few AssessmentAssigns
     * const { count } = await prisma.assessmentAssign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentAssignDeleteManyArgs>(args?: SelectSubset<T, AssessmentAssignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentAssigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAssignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentAssigns
     * const assessmentAssign = await prisma.assessmentAssign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentAssignUpdateManyArgs>(args: SelectSubset<T, AssessmentAssignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssessmentAssign.
     * @param {AssessmentAssignUpsertArgs} args - Arguments to update or create a AssessmentAssign.
     * @example
     * // Update or create a AssessmentAssign
     * const assessmentAssign = await prisma.assessmentAssign.upsert({
     *   create: {
     *     // ... data to create a AssessmentAssign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentAssign we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentAssignUpsertArgs>(args: SelectSubset<T, AssessmentAssignUpsertArgs<ExtArgs>>): Prisma__AssessmentAssignClient<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AssessmentAssigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAssignCountArgs} args - Arguments to filter AssessmentAssigns to count.
     * @example
     * // Count the number of AssessmentAssigns
     * const count = await prisma.assessmentAssign.count({
     *   where: {
     *     // ... the filter for the AssessmentAssigns we want to count
     *   }
     * })
    **/
    count<T extends AssessmentAssignCountArgs>(
      args?: Subset<T, AssessmentAssignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentAssignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentAssign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAssignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentAssignAggregateArgs>(args: Subset<T, AssessmentAssignAggregateArgs>): Prisma.PrismaPromise<GetAssessmentAssignAggregateType<T>>

    /**
     * Group by AssessmentAssign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentAssignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentAssignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentAssignGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentAssignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentAssignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentAssignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentAssign model
   */
  readonly fields: AssessmentAssignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentAssign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentAssignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Member<T extends TeamMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamMemberDefaultArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AssessmentQuestionAssign<T extends AssessmentAssign$AssessmentQuestionAssignArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentAssign$AssessmentQuestionAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssessmentAssign model
   */ 
  interface AssessmentAssignFieldRefs {
    readonly id: FieldRef<"AssessmentAssign", 'Int'>
    readonly assessmentId: FieldRef<"AssessmentAssign", 'Int'>
    readonly teamId: FieldRef<"AssessmentAssign", 'Int'>
    readonly memberId: FieldRef<"AssessmentAssign", 'Int'>
    readonly password: FieldRef<"AssessmentAssign", 'String'>
    readonly rememberToken: FieldRef<"AssessmentAssign", 'String'>
    readonly isActive: FieldRef<"AssessmentAssign", 'Boolean'>
    readonly secretToken: FieldRef<"AssessmentAssign", 'String'>
    readonly tfaToken: FieldRef<"AssessmentAssign", 'String'>
    readonly createdAt: FieldRef<"AssessmentAssign", 'DateTime'>
    readonly updatedAt: FieldRef<"AssessmentAssign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentAssign findUnique
   */
  export type AssessmentAssignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAssign to fetch.
     */
    where: AssessmentAssignWhereUniqueInput
  }

  /**
   * AssessmentAssign findUniqueOrThrow
   */
  export type AssessmentAssignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAssign to fetch.
     */
    where: AssessmentAssignWhereUniqueInput
  }

  /**
   * AssessmentAssign findFirst
   */
  export type AssessmentAssignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAssign to fetch.
     */
    where?: AssessmentAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAssigns to fetch.
     */
    orderBy?: AssessmentAssignOrderByWithRelationInput | AssessmentAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentAssigns.
     */
    cursor?: AssessmentAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentAssigns.
     */
    distinct?: AssessmentAssignScalarFieldEnum | AssessmentAssignScalarFieldEnum[]
  }

  /**
   * AssessmentAssign findFirstOrThrow
   */
  export type AssessmentAssignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAssign to fetch.
     */
    where?: AssessmentAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAssigns to fetch.
     */
    orderBy?: AssessmentAssignOrderByWithRelationInput | AssessmentAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentAssigns.
     */
    cursor?: AssessmentAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentAssigns.
     */
    distinct?: AssessmentAssignScalarFieldEnum | AssessmentAssignScalarFieldEnum[]
  }

  /**
   * AssessmentAssign findMany
   */
  export type AssessmentAssignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentAssigns to fetch.
     */
    where?: AssessmentAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentAssigns to fetch.
     */
    orderBy?: AssessmentAssignOrderByWithRelationInput | AssessmentAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentAssigns.
     */
    cursor?: AssessmentAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentAssigns.
     */
    skip?: number
    distinct?: AssessmentAssignScalarFieldEnum | AssessmentAssignScalarFieldEnum[]
  }

  /**
   * AssessmentAssign create
   */
  export type AssessmentAssignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentAssign.
     */
    data: XOR<AssessmentAssignCreateInput, AssessmentAssignUncheckedCreateInput>
  }

  /**
   * AssessmentAssign createMany
   */
  export type AssessmentAssignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentAssigns.
     */
    data: AssessmentAssignCreateManyInput | AssessmentAssignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentAssign update
   */
  export type AssessmentAssignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentAssign.
     */
    data: XOR<AssessmentAssignUpdateInput, AssessmentAssignUncheckedUpdateInput>
    /**
     * Choose, which AssessmentAssign to update.
     */
    where: AssessmentAssignWhereUniqueInput
  }

  /**
   * AssessmentAssign updateMany
   */
  export type AssessmentAssignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentAssigns.
     */
    data: XOR<AssessmentAssignUpdateManyMutationInput, AssessmentAssignUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentAssigns to update
     */
    where?: AssessmentAssignWhereInput
  }

  /**
   * AssessmentAssign upsert
   */
  export type AssessmentAssignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentAssign to update in case it exists.
     */
    where: AssessmentAssignWhereUniqueInput
    /**
     * In case the AssessmentAssign found by the `where` argument doesn't exist, create a new AssessmentAssign with this data.
     */
    create: XOR<AssessmentAssignCreateInput, AssessmentAssignUncheckedCreateInput>
    /**
     * In case the AssessmentAssign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentAssignUpdateInput, AssessmentAssignUncheckedUpdateInput>
  }

  /**
   * AssessmentAssign delete
   */
  export type AssessmentAssignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    /**
     * Filter which AssessmentAssign to delete.
     */
    where: AssessmentAssignWhereUniqueInput
  }

  /**
   * AssessmentAssign deleteMany
   */
  export type AssessmentAssignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentAssigns to delete
     */
    where?: AssessmentAssignWhereInput
  }

  /**
   * AssessmentAssign.AssessmentQuestionAssign
   */
  export type AssessmentAssign$AssessmentQuestionAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    where?: AssessmentQuestionAssignWhereInput
    orderBy?: AssessmentQuestionAssignOrderByWithRelationInput | AssessmentQuestionAssignOrderByWithRelationInput[]
    cursor?: AssessmentQuestionAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentQuestionAssignScalarFieldEnum | AssessmentQuestionAssignScalarFieldEnum[]
  }

  /**
   * AssessmentAssign without action
   */
  export type AssessmentAssignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentQuestion
   */

  export type AggregateAssessmentQuestion = {
    _count: AssessmentQuestionCountAggregateOutputType | null
    _avg: AssessmentQuestionAvgAggregateOutputType | null
    _sum: AssessmentQuestionSumAggregateOutputType | null
    _min: AssessmentQuestionMinAggregateOutputType | null
    _max: AssessmentQuestionMaxAggregateOutputType | null
  }

  export type AssessmentQuestionAvgAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    questionId_: number | null
    questionId: number | null
  }

  export type AssessmentQuestionSumAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    questionId_: number | null
    questionId: number | null
  }

  export type AssessmentQuestionMinAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    questionId_: number | null
    questionId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentQuestionMaxAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    questionId_: number | null
    questionId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentQuestionCountAggregateOutputType = {
    id: number
    assessmentId: number
    questionId_: number
    questionId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssessmentQuestionAvgAggregateInputType = {
    id?: true
    assessmentId?: true
    questionId_?: true
    questionId?: true
  }

  export type AssessmentQuestionSumAggregateInputType = {
    id?: true
    assessmentId?: true
    questionId_?: true
    questionId?: true
  }

  export type AssessmentQuestionMinAggregateInputType = {
    id?: true
    assessmentId?: true
    questionId_?: true
    questionId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentQuestionMaxAggregateInputType = {
    id?: true
    assessmentId?: true
    questionId_?: true
    questionId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentQuestionCountAggregateInputType = {
    id?: true
    assessmentId?: true
    questionId_?: true
    questionId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssessmentQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentQuestion to aggregate.
     */
    where?: AssessmentQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestions to fetch.
     */
    orderBy?: AssessmentQuestionOrderByWithRelationInput | AssessmentQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentQuestions
    **/
    _count?: true | AssessmentQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentQuestionMaxAggregateInputType
  }

  export type GetAssessmentQuestionAggregateType<T extends AssessmentQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentQuestion[P]>
      : GetScalarType<T[P], AggregateAssessmentQuestion[P]>
  }




  export type AssessmentQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionWhereInput
    orderBy?: AssessmentQuestionOrderByWithAggregationInput | AssessmentQuestionOrderByWithAggregationInput[]
    by: AssessmentQuestionScalarFieldEnum[] | AssessmentQuestionScalarFieldEnum
    having?: AssessmentQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentQuestionCountAggregateInputType | true
    _avg?: AssessmentQuestionAvgAggregateInputType
    _sum?: AssessmentQuestionSumAggregateInputType
    _min?: AssessmentQuestionMinAggregateInputType
    _max?: AssessmentQuestionMaxAggregateInputType
  }

  export type AssessmentQuestionGroupByOutputType = {
    id: number
    assessmentId: number
    questionId_: number
    questionId: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AssessmentQuestionCountAggregateOutputType | null
    _avg: AssessmentQuestionAvgAggregateOutputType | null
    _sum: AssessmentQuestionSumAggregateOutputType | null
    _min: AssessmentQuestionMinAggregateOutputType | null
    _max: AssessmentQuestionMaxAggregateOutputType | null
  }

  type GetAssessmentQuestionGroupByPayload<T extends AssessmentQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentQuestionGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    questionId_?: boolean
    questionId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    AssessmentQuestionAssign?: boolean | AssessmentQuestion$AssessmentQuestionAssignArgs<ExtArgs>
    _count?: boolean | AssessmentQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentQuestion"]>


  export type AssessmentQuestionSelectScalar = {
    id?: boolean
    assessmentId?: boolean
    questionId_?: boolean
    questionId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssessmentQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    AssessmentQuestionAssign?: boolean | AssessmentQuestion$AssessmentQuestionAssignArgs<ExtArgs>
    _count?: boolean | AssessmentQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AssessmentQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentQuestion"
    objects: {
      Assessment: Prisma.$AssessmentPayload<ExtArgs>
      Question: Prisma.$QuestionPayload<ExtArgs>
      AssessmentQuestionAssign: Prisma.$AssessmentQuestionAssignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assessmentId: number
      questionId_: number
      questionId: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assessmentQuestion"]>
    composites: {}
  }

  type AssessmentQuestionGetPayload<S extends boolean | null | undefined | AssessmentQuestionDefaultArgs> = $Result.GetResult<Prisma.$AssessmentQuestionPayload, S>

  type AssessmentQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentQuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentQuestionCountAggregateInputType | true
    }

  export interface AssessmentQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentQuestion'], meta: { name: 'AssessmentQuestion' } }
    /**
     * Find zero or one AssessmentQuestion that matches the filter.
     * @param {AssessmentQuestionFindUniqueArgs} args - Arguments to find a AssessmentQuestion
     * @example
     * // Get one AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentQuestionFindUniqueArgs>(args: SelectSubset<T, AssessmentQuestionFindUniqueArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AssessmentQuestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssessmentQuestionFindUniqueOrThrowArgs} args - Arguments to find a AssessmentQuestion
     * @example
     * // Get one AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AssessmentQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionFindFirstArgs} args - Arguments to find a AssessmentQuestion
     * @example
     * // Get one AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentQuestionFindFirstArgs>(args?: SelectSubset<T, AssessmentQuestionFindFirstArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AssessmentQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionFindFirstOrThrowArgs} args - Arguments to find a AssessmentQuestion
     * @example
     * // Get one AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AssessmentQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentQuestions
     * const assessmentQuestions = await prisma.assessmentQuestion.findMany()
     * 
     * // Get first 10 AssessmentQuestions
     * const assessmentQuestions = await prisma.assessmentQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentQuestionWithIdOnly = await prisma.assessmentQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentQuestionFindManyArgs>(args?: SelectSubset<T, AssessmentQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AssessmentQuestion.
     * @param {AssessmentQuestionCreateArgs} args - Arguments to create a AssessmentQuestion.
     * @example
     * // Create one AssessmentQuestion
     * const AssessmentQuestion = await prisma.assessmentQuestion.create({
     *   data: {
     *     // ... data to create a AssessmentQuestion
     *   }
     * })
     * 
     */
    create<T extends AssessmentQuestionCreateArgs>(args: SelectSubset<T, AssessmentQuestionCreateArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AssessmentQuestions.
     * @param {AssessmentQuestionCreateManyArgs} args - Arguments to create many AssessmentQuestions.
     * @example
     * // Create many AssessmentQuestions
     * const assessmentQuestion = await prisma.assessmentQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentQuestionCreateManyArgs>(args?: SelectSubset<T, AssessmentQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssessmentQuestion.
     * @param {AssessmentQuestionDeleteArgs} args - Arguments to delete one AssessmentQuestion.
     * @example
     * // Delete one AssessmentQuestion
     * const AssessmentQuestion = await prisma.assessmentQuestion.delete({
     *   where: {
     *     // ... filter to delete one AssessmentQuestion
     *   }
     * })
     * 
     */
    delete<T extends AssessmentQuestionDeleteArgs>(args: SelectSubset<T, AssessmentQuestionDeleteArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AssessmentQuestion.
     * @param {AssessmentQuestionUpdateArgs} args - Arguments to update one AssessmentQuestion.
     * @example
     * // Update one AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentQuestionUpdateArgs>(args: SelectSubset<T, AssessmentQuestionUpdateArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AssessmentQuestions.
     * @param {AssessmentQuestionDeleteManyArgs} args - Arguments to filter AssessmentQuestions to delete.
     * @example
     * // Delete a few AssessmentQuestions
     * const { count } = await prisma.assessmentQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentQuestionDeleteManyArgs>(args?: SelectSubset<T, AssessmentQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentQuestions
     * const assessmentQuestion = await prisma.assessmentQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentQuestionUpdateManyArgs>(args: SelectSubset<T, AssessmentQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssessmentQuestion.
     * @param {AssessmentQuestionUpsertArgs} args - Arguments to update or create a AssessmentQuestion.
     * @example
     * // Update or create a AssessmentQuestion
     * const assessmentQuestion = await prisma.assessmentQuestion.upsert({
     *   create: {
     *     // ... data to create a AssessmentQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentQuestion we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentQuestionUpsertArgs>(args: SelectSubset<T, AssessmentQuestionUpsertArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AssessmentQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionCountArgs} args - Arguments to filter AssessmentQuestions to count.
     * @example
     * // Count the number of AssessmentQuestions
     * const count = await prisma.assessmentQuestion.count({
     *   where: {
     *     // ... the filter for the AssessmentQuestions we want to count
     *   }
     * })
    **/
    count<T extends AssessmentQuestionCountArgs>(
      args?: Subset<T, AssessmentQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentQuestionAggregateArgs>(args: Subset<T, AssessmentQuestionAggregateArgs>): Prisma.PrismaPromise<GetAssessmentQuestionAggregateType<T>>

    /**
     * Group by AssessmentQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentQuestionGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentQuestion model
   */
  readonly fields: AssessmentQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AssessmentQuestionAssign<T extends AssessmentQuestion$AssessmentQuestionAssignArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentQuestion$AssessmentQuestionAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssessmentQuestion model
   */ 
  interface AssessmentQuestionFieldRefs {
    readonly id: FieldRef<"AssessmentQuestion", 'Int'>
    readonly assessmentId: FieldRef<"AssessmentQuestion", 'Int'>
    readonly questionId_: FieldRef<"AssessmentQuestion", 'Int'>
    readonly questionId: FieldRef<"AssessmentQuestion", 'Int'>
    readonly isActive: FieldRef<"AssessmentQuestion", 'Boolean'>
    readonly createdAt: FieldRef<"AssessmentQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"AssessmentQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentQuestion findUnique
   */
  export type AssessmentQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestion to fetch.
     */
    where: AssessmentQuestionWhereUniqueInput
  }

  /**
   * AssessmentQuestion findUniqueOrThrow
   */
  export type AssessmentQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestion to fetch.
     */
    where: AssessmentQuestionWhereUniqueInput
  }

  /**
   * AssessmentQuestion findFirst
   */
  export type AssessmentQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestion to fetch.
     */
    where?: AssessmentQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestions to fetch.
     */
    orderBy?: AssessmentQuestionOrderByWithRelationInput | AssessmentQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentQuestions.
     */
    cursor?: AssessmentQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentQuestions.
     */
    distinct?: AssessmentQuestionScalarFieldEnum | AssessmentQuestionScalarFieldEnum[]
  }

  /**
   * AssessmentQuestion findFirstOrThrow
   */
  export type AssessmentQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestion to fetch.
     */
    where?: AssessmentQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestions to fetch.
     */
    orderBy?: AssessmentQuestionOrderByWithRelationInput | AssessmentQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentQuestions.
     */
    cursor?: AssessmentQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentQuestions.
     */
    distinct?: AssessmentQuestionScalarFieldEnum | AssessmentQuestionScalarFieldEnum[]
  }

  /**
   * AssessmentQuestion findMany
   */
  export type AssessmentQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestions to fetch.
     */
    where?: AssessmentQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestions to fetch.
     */
    orderBy?: AssessmentQuestionOrderByWithRelationInput | AssessmentQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentQuestions.
     */
    cursor?: AssessmentQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestions.
     */
    skip?: number
    distinct?: AssessmentQuestionScalarFieldEnum | AssessmentQuestionScalarFieldEnum[]
  }

  /**
   * AssessmentQuestion create
   */
  export type AssessmentQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentQuestion.
     */
    data: XOR<AssessmentQuestionCreateInput, AssessmentQuestionUncheckedCreateInput>
  }

  /**
   * AssessmentQuestion createMany
   */
  export type AssessmentQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentQuestions.
     */
    data: AssessmentQuestionCreateManyInput | AssessmentQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentQuestion update
   */
  export type AssessmentQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentQuestion.
     */
    data: XOR<AssessmentQuestionUpdateInput, AssessmentQuestionUncheckedUpdateInput>
    /**
     * Choose, which AssessmentQuestion to update.
     */
    where: AssessmentQuestionWhereUniqueInput
  }

  /**
   * AssessmentQuestion updateMany
   */
  export type AssessmentQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentQuestions.
     */
    data: XOR<AssessmentQuestionUpdateManyMutationInput, AssessmentQuestionUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentQuestions to update
     */
    where?: AssessmentQuestionWhereInput
  }

  /**
   * AssessmentQuestion upsert
   */
  export type AssessmentQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentQuestion to update in case it exists.
     */
    where: AssessmentQuestionWhereUniqueInput
    /**
     * In case the AssessmentQuestion found by the `where` argument doesn't exist, create a new AssessmentQuestion with this data.
     */
    create: XOR<AssessmentQuestionCreateInput, AssessmentQuestionUncheckedCreateInput>
    /**
     * In case the AssessmentQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentQuestionUpdateInput, AssessmentQuestionUncheckedUpdateInput>
  }

  /**
   * AssessmentQuestion delete
   */
  export type AssessmentQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    /**
     * Filter which AssessmentQuestion to delete.
     */
    where: AssessmentQuestionWhereUniqueInput
  }

  /**
   * AssessmentQuestion deleteMany
   */
  export type AssessmentQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentQuestions to delete
     */
    where?: AssessmentQuestionWhereInput
  }

  /**
   * AssessmentQuestion.AssessmentQuestionAssign
   */
  export type AssessmentQuestion$AssessmentQuestionAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    where?: AssessmentQuestionAssignWhereInput
    orderBy?: AssessmentQuestionAssignOrderByWithRelationInput | AssessmentQuestionAssignOrderByWithRelationInput[]
    cursor?: AssessmentQuestionAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentQuestionAssignScalarFieldEnum | AssessmentQuestionAssignScalarFieldEnum[]
  }

  /**
   * AssessmentQuestion without action
   */
  export type AssessmentQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentQuestionAnswer
   */

  export type AggregateAssessmentQuestionAnswer = {
    _count: AssessmentQuestionAnswerCountAggregateOutputType | null
    _avg: AssessmentQuestionAnswerAvgAggregateOutputType | null
    _sum: AssessmentQuestionAnswerSumAggregateOutputType | null
    _min: AssessmentQuestionAnswerMinAggregateOutputType | null
    _max: AssessmentQuestionAnswerMaxAggregateOutputType | null
  }

  export type AssessmentQuestionAnswerAvgAggregateOutputType = {
    id: number | null
    assessmentQuestionAssignId: number | null
    questionAnswerId: number | null
  }

  export type AssessmentQuestionAnswerSumAggregateOutputType = {
    id: number | null
    assessmentQuestionAssignId: number | null
    questionAnswerId: number | null
  }

  export type AssessmentQuestionAnswerMinAggregateOutputType = {
    id: number | null
    assessmentQuestionAssignId: number | null
    questionAnswerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentQuestionAnswerMaxAggregateOutputType = {
    id: number | null
    assessmentQuestionAssignId: number | null
    questionAnswerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentQuestionAnswerCountAggregateOutputType = {
    id: number
    assessmentQuestionAssignId: number
    questionAnswerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssessmentQuestionAnswerAvgAggregateInputType = {
    id?: true
    assessmentQuestionAssignId?: true
    questionAnswerId?: true
  }

  export type AssessmentQuestionAnswerSumAggregateInputType = {
    id?: true
    assessmentQuestionAssignId?: true
    questionAnswerId?: true
  }

  export type AssessmentQuestionAnswerMinAggregateInputType = {
    id?: true
    assessmentQuestionAssignId?: true
    questionAnswerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentQuestionAnswerMaxAggregateInputType = {
    id?: true
    assessmentQuestionAssignId?: true
    questionAnswerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentQuestionAnswerCountAggregateInputType = {
    id?: true
    assessmentQuestionAssignId?: true
    questionAnswerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssessmentQuestionAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentQuestionAnswer to aggregate.
     */
    where?: AssessmentQuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestionAnswers to fetch.
     */
    orderBy?: AssessmentQuestionAnswerOrderByWithRelationInput | AssessmentQuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentQuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentQuestionAnswers
    **/
    _count?: true | AssessmentQuestionAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentQuestionAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentQuestionAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentQuestionAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentQuestionAnswerMaxAggregateInputType
  }

  export type GetAssessmentQuestionAnswerAggregateType<T extends AssessmentQuestionAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentQuestionAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentQuestionAnswer[P]>
      : GetScalarType<T[P], AggregateAssessmentQuestionAnswer[P]>
  }




  export type AssessmentQuestionAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionAnswerWhereInput
    orderBy?: AssessmentQuestionAnswerOrderByWithAggregationInput | AssessmentQuestionAnswerOrderByWithAggregationInput[]
    by: AssessmentQuestionAnswerScalarFieldEnum[] | AssessmentQuestionAnswerScalarFieldEnum
    having?: AssessmentQuestionAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentQuestionAnswerCountAggregateInputType | true
    _avg?: AssessmentQuestionAnswerAvgAggregateInputType
    _sum?: AssessmentQuestionAnswerSumAggregateInputType
    _min?: AssessmentQuestionAnswerMinAggregateInputType
    _max?: AssessmentQuestionAnswerMaxAggregateInputType
  }

  export type AssessmentQuestionAnswerGroupByOutputType = {
    id: number
    assessmentQuestionAssignId: number
    questionAnswerId: number
    createdAt: Date
    updatedAt: Date
    _count: AssessmentQuestionAnswerCountAggregateOutputType | null
    _avg: AssessmentQuestionAnswerAvgAggregateOutputType | null
    _sum: AssessmentQuestionAnswerSumAggregateOutputType | null
    _min: AssessmentQuestionAnswerMinAggregateOutputType | null
    _max: AssessmentQuestionAnswerMaxAggregateOutputType | null
  }

  type GetAssessmentQuestionAnswerGroupByPayload<T extends AssessmentQuestionAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentQuestionAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentQuestionAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentQuestionAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentQuestionAnswerGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentQuestionAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentQuestionAssignId?: boolean
    questionAnswerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    AssessmentQuestionAssign?: boolean | AssessmentQuestionAssignDefaultArgs<ExtArgs>
    AuestionAnswer?: boolean | AuestionAnswerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentQuestionAnswer"]>


  export type AssessmentQuestionAnswerSelectScalar = {
    id?: boolean
    assessmentQuestionAssignId?: boolean
    questionAnswerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssessmentQuestionAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssessmentQuestionAssign?: boolean | AssessmentQuestionAssignDefaultArgs<ExtArgs>
    AuestionAnswer?: boolean | AuestionAnswerDefaultArgs<ExtArgs>
  }

  export type $AssessmentQuestionAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentQuestionAnswer"
    objects: {
      AssessmentQuestionAssign: Prisma.$AssessmentQuestionAssignPayload<ExtArgs>
      AuestionAnswer: Prisma.$AuestionAnswerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assessmentQuestionAssignId: number
      questionAnswerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assessmentQuestionAnswer"]>
    composites: {}
  }

  type AssessmentQuestionAnswerGetPayload<S extends boolean | null | undefined | AssessmentQuestionAnswerDefaultArgs> = $Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload, S>

  type AssessmentQuestionAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentQuestionAnswerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentQuestionAnswerCountAggregateInputType | true
    }

  export interface AssessmentQuestionAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentQuestionAnswer'], meta: { name: 'AssessmentQuestionAnswer' } }
    /**
     * Find zero or one AssessmentQuestionAnswer that matches the filter.
     * @param {AssessmentQuestionAnswerFindUniqueArgs} args - Arguments to find a AssessmentQuestionAnswer
     * @example
     * // Get one AssessmentQuestionAnswer
     * const assessmentQuestionAnswer = await prisma.assessmentQuestionAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentQuestionAnswerFindUniqueArgs>(args: SelectSubset<T, AssessmentQuestionAnswerFindUniqueArgs<ExtArgs>>): Prisma__AssessmentQuestionAnswerClient<$Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AssessmentQuestionAnswer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssessmentQuestionAnswerFindUniqueOrThrowArgs} args - Arguments to find a AssessmentQuestionAnswer
     * @example
     * // Get one AssessmentQuestionAnswer
     * const assessmentQuestionAnswer = await prisma.assessmentQuestionAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentQuestionAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentQuestionAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentQuestionAnswerClient<$Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AssessmentQuestionAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAnswerFindFirstArgs} args - Arguments to find a AssessmentQuestionAnswer
     * @example
     * // Get one AssessmentQuestionAnswer
     * const assessmentQuestionAnswer = await prisma.assessmentQuestionAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentQuestionAnswerFindFirstArgs>(args?: SelectSubset<T, AssessmentQuestionAnswerFindFirstArgs<ExtArgs>>): Prisma__AssessmentQuestionAnswerClient<$Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AssessmentQuestionAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAnswerFindFirstOrThrowArgs} args - Arguments to find a AssessmentQuestionAnswer
     * @example
     * // Get one AssessmentQuestionAnswer
     * const assessmentQuestionAnswer = await prisma.assessmentQuestionAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentQuestionAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentQuestionAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentQuestionAnswerClient<$Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AssessmentQuestionAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentQuestionAnswers
     * const assessmentQuestionAnswers = await prisma.assessmentQuestionAnswer.findMany()
     * 
     * // Get first 10 AssessmentQuestionAnswers
     * const assessmentQuestionAnswers = await prisma.assessmentQuestionAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentQuestionAnswerWithIdOnly = await prisma.assessmentQuestionAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentQuestionAnswerFindManyArgs>(args?: SelectSubset<T, AssessmentQuestionAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AssessmentQuestionAnswer.
     * @param {AssessmentQuestionAnswerCreateArgs} args - Arguments to create a AssessmentQuestionAnswer.
     * @example
     * // Create one AssessmentQuestionAnswer
     * const AssessmentQuestionAnswer = await prisma.assessmentQuestionAnswer.create({
     *   data: {
     *     // ... data to create a AssessmentQuestionAnswer
     *   }
     * })
     * 
     */
    create<T extends AssessmentQuestionAnswerCreateArgs>(args: SelectSubset<T, AssessmentQuestionAnswerCreateArgs<ExtArgs>>): Prisma__AssessmentQuestionAnswerClient<$Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AssessmentQuestionAnswers.
     * @param {AssessmentQuestionAnswerCreateManyArgs} args - Arguments to create many AssessmentQuestionAnswers.
     * @example
     * // Create many AssessmentQuestionAnswers
     * const assessmentQuestionAnswer = await prisma.assessmentQuestionAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentQuestionAnswerCreateManyArgs>(args?: SelectSubset<T, AssessmentQuestionAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssessmentQuestionAnswer.
     * @param {AssessmentQuestionAnswerDeleteArgs} args - Arguments to delete one AssessmentQuestionAnswer.
     * @example
     * // Delete one AssessmentQuestionAnswer
     * const AssessmentQuestionAnswer = await prisma.assessmentQuestionAnswer.delete({
     *   where: {
     *     // ... filter to delete one AssessmentQuestionAnswer
     *   }
     * })
     * 
     */
    delete<T extends AssessmentQuestionAnswerDeleteArgs>(args: SelectSubset<T, AssessmentQuestionAnswerDeleteArgs<ExtArgs>>): Prisma__AssessmentQuestionAnswerClient<$Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AssessmentQuestionAnswer.
     * @param {AssessmentQuestionAnswerUpdateArgs} args - Arguments to update one AssessmentQuestionAnswer.
     * @example
     * // Update one AssessmentQuestionAnswer
     * const assessmentQuestionAnswer = await prisma.assessmentQuestionAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentQuestionAnswerUpdateArgs>(args: SelectSubset<T, AssessmentQuestionAnswerUpdateArgs<ExtArgs>>): Prisma__AssessmentQuestionAnswerClient<$Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AssessmentQuestionAnswers.
     * @param {AssessmentQuestionAnswerDeleteManyArgs} args - Arguments to filter AssessmentQuestionAnswers to delete.
     * @example
     * // Delete a few AssessmentQuestionAnswers
     * const { count } = await prisma.assessmentQuestionAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentQuestionAnswerDeleteManyArgs>(args?: SelectSubset<T, AssessmentQuestionAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentQuestionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentQuestionAnswers
     * const assessmentQuestionAnswer = await prisma.assessmentQuestionAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentQuestionAnswerUpdateManyArgs>(args: SelectSubset<T, AssessmentQuestionAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssessmentQuestionAnswer.
     * @param {AssessmentQuestionAnswerUpsertArgs} args - Arguments to update or create a AssessmentQuestionAnswer.
     * @example
     * // Update or create a AssessmentQuestionAnswer
     * const assessmentQuestionAnswer = await prisma.assessmentQuestionAnswer.upsert({
     *   create: {
     *     // ... data to create a AssessmentQuestionAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentQuestionAnswer we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentQuestionAnswerUpsertArgs>(args: SelectSubset<T, AssessmentQuestionAnswerUpsertArgs<ExtArgs>>): Prisma__AssessmentQuestionAnswerClient<$Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AssessmentQuestionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAnswerCountArgs} args - Arguments to filter AssessmentQuestionAnswers to count.
     * @example
     * // Count the number of AssessmentQuestionAnswers
     * const count = await prisma.assessmentQuestionAnswer.count({
     *   where: {
     *     // ... the filter for the AssessmentQuestionAnswers we want to count
     *   }
     * })
    **/
    count<T extends AssessmentQuestionAnswerCountArgs>(
      args?: Subset<T, AssessmentQuestionAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentQuestionAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentQuestionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentQuestionAnswerAggregateArgs>(args: Subset<T, AssessmentQuestionAnswerAggregateArgs>): Prisma.PrismaPromise<GetAssessmentQuestionAnswerAggregateType<T>>

    /**
     * Group by AssessmentQuestionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentQuestionAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentQuestionAnswerGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentQuestionAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentQuestionAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentQuestionAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentQuestionAnswer model
   */
  readonly fields: AssessmentQuestionAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentQuestionAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentQuestionAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AssessmentQuestionAssign<T extends AssessmentQuestionAssignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentQuestionAssignDefaultArgs<ExtArgs>>): Prisma__AssessmentQuestionAssignClient<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AuestionAnswer<T extends AuestionAnswerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuestionAnswerDefaultArgs<ExtArgs>>): Prisma__AuestionAnswerClient<$Result.GetResult<Prisma.$AuestionAnswerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssessmentQuestionAnswer model
   */ 
  interface AssessmentQuestionAnswerFieldRefs {
    readonly id: FieldRef<"AssessmentQuestionAnswer", 'Int'>
    readonly assessmentQuestionAssignId: FieldRef<"AssessmentQuestionAnswer", 'Int'>
    readonly questionAnswerId: FieldRef<"AssessmentQuestionAnswer", 'Int'>
    readonly createdAt: FieldRef<"AssessmentQuestionAnswer", 'DateTime'>
    readonly updatedAt: FieldRef<"AssessmentQuestionAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentQuestionAnswer findUnique
   */
  export type AssessmentQuestionAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestionAnswer to fetch.
     */
    where: AssessmentQuestionAnswerWhereUniqueInput
  }

  /**
   * AssessmentQuestionAnswer findUniqueOrThrow
   */
  export type AssessmentQuestionAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestionAnswer to fetch.
     */
    where: AssessmentQuestionAnswerWhereUniqueInput
  }

  /**
   * AssessmentQuestionAnswer findFirst
   */
  export type AssessmentQuestionAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestionAnswer to fetch.
     */
    where?: AssessmentQuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestionAnswers to fetch.
     */
    orderBy?: AssessmentQuestionAnswerOrderByWithRelationInput | AssessmentQuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentQuestionAnswers.
     */
    cursor?: AssessmentQuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentQuestionAnswers.
     */
    distinct?: AssessmentQuestionAnswerScalarFieldEnum | AssessmentQuestionAnswerScalarFieldEnum[]
  }

  /**
   * AssessmentQuestionAnswer findFirstOrThrow
   */
  export type AssessmentQuestionAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestionAnswer to fetch.
     */
    where?: AssessmentQuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestionAnswers to fetch.
     */
    orderBy?: AssessmentQuestionAnswerOrderByWithRelationInput | AssessmentQuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentQuestionAnswers.
     */
    cursor?: AssessmentQuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentQuestionAnswers.
     */
    distinct?: AssessmentQuestionAnswerScalarFieldEnum | AssessmentQuestionAnswerScalarFieldEnum[]
  }

  /**
   * AssessmentQuestionAnswer findMany
   */
  export type AssessmentQuestionAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestionAnswers to fetch.
     */
    where?: AssessmentQuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestionAnswers to fetch.
     */
    orderBy?: AssessmentQuestionAnswerOrderByWithRelationInput | AssessmentQuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentQuestionAnswers.
     */
    cursor?: AssessmentQuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestionAnswers.
     */
    skip?: number
    distinct?: AssessmentQuestionAnswerScalarFieldEnum | AssessmentQuestionAnswerScalarFieldEnum[]
  }

  /**
   * AssessmentQuestionAnswer create
   */
  export type AssessmentQuestionAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentQuestionAnswer.
     */
    data: XOR<AssessmentQuestionAnswerCreateInput, AssessmentQuestionAnswerUncheckedCreateInput>
  }

  /**
   * AssessmentQuestionAnswer createMany
   */
  export type AssessmentQuestionAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentQuestionAnswers.
     */
    data: AssessmentQuestionAnswerCreateManyInput | AssessmentQuestionAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentQuestionAnswer update
   */
  export type AssessmentQuestionAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentQuestionAnswer.
     */
    data: XOR<AssessmentQuestionAnswerUpdateInput, AssessmentQuestionAnswerUncheckedUpdateInput>
    /**
     * Choose, which AssessmentQuestionAnswer to update.
     */
    where: AssessmentQuestionAnswerWhereUniqueInput
  }

  /**
   * AssessmentQuestionAnswer updateMany
   */
  export type AssessmentQuestionAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentQuestionAnswers.
     */
    data: XOR<AssessmentQuestionAnswerUpdateManyMutationInput, AssessmentQuestionAnswerUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentQuestionAnswers to update
     */
    where?: AssessmentQuestionAnswerWhereInput
  }

  /**
   * AssessmentQuestionAnswer upsert
   */
  export type AssessmentQuestionAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentQuestionAnswer to update in case it exists.
     */
    where: AssessmentQuestionAnswerWhereUniqueInput
    /**
     * In case the AssessmentQuestionAnswer found by the `where` argument doesn't exist, create a new AssessmentQuestionAnswer with this data.
     */
    create: XOR<AssessmentQuestionAnswerCreateInput, AssessmentQuestionAnswerUncheckedCreateInput>
    /**
     * In case the AssessmentQuestionAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentQuestionAnswerUpdateInput, AssessmentQuestionAnswerUncheckedUpdateInput>
  }

  /**
   * AssessmentQuestionAnswer delete
   */
  export type AssessmentQuestionAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter which AssessmentQuestionAnswer to delete.
     */
    where: AssessmentQuestionAnswerWhereUniqueInput
  }

  /**
   * AssessmentQuestionAnswer deleteMany
   */
  export type AssessmentQuestionAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentQuestionAnswers to delete
     */
    where?: AssessmentQuestionAnswerWhereInput
  }

  /**
   * AssessmentQuestionAnswer without action
   */
  export type AssessmentQuestionAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentQuestionAssign
   */

  export type AggregateAssessmentQuestionAssign = {
    _count: AssessmentQuestionAssignCountAggregateOutputType | null
    _avg: AssessmentQuestionAssignAvgAggregateOutputType | null
    _sum: AssessmentQuestionAssignSumAggregateOutputType | null
    _min: AssessmentQuestionAssignMinAggregateOutputType | null
    _max: AssessmentQuestionAssignMaxAggregateOutputType | null
  }

  export type AssessmentQuestionAssignAvgAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    teamId: number | null
    memberId: number | null
    assessmentQuestionId: number | null
    assessmentAssignId: number | null
  }

  export type AssessmentQuestionAssignSumAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    teamId: number | null
    memberId: number | null
    assessmentQuestionId: number | null
    assessmentAssignId: number | null
  }

  export type AssessmentQuestionAssignMinAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    teamId: number | null
    memberId: number | null
    assessmentQuestionId: number | null
    assessmentAssignId: number | null
    password: string | null
    rememberToken: string | null
    isActive: boolean | null
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentQuestionAssignMaxAggregateOutputType = {
    id: number | null
    assessmentId: number | null
    teamId: number | null
    memberId: number | null
    assessmentQuestionId: number | null
    assessmentAssignId: number | null
    password: string | null
    rememberToken: string | null
    isActive: boolean | null
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentQuestionAssignCountAggregateOutputType = {
    id: number
    assessmentId: number
    teamId: number
    memberId: number
    assessmentQuestionId: number
    assessmentAssignId: number
    password: number
    rememberToken: number
    isActive: number
    secretToken: number
    tfaToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssessmentQuestionAssignAvgAggregateInputType = {
    id?: true
    assessmentId?: true
    teamId?: true
    memberId?: true
    assessmentQuestionId?: true
    assessmentAssignId?: true
  }

  export type AssessmentQuestionAssignSumAggregateInputType = {
    id?: true
    assessmentId?: true
    teamId?: true
    memberId?: true
    assessmentQuestionId?: true
    assessmentAssignId?: true
  }

  export type AssessmentQuestionAssignMinAggregateInputType = {
    id?: true
    assessmentId?: true
    teamId?: true
    memberId?: true
    assessmentQuestionId?: true
    assessmentAssignId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentQuestionAssignMaxAggregateInputType = {
    id?: true
    assessmentId?: true
    teamId?: true
    memberId?: true
    assessmentQuestionId?: true
    assessmentAssignId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentQuestionAssignCountAggregateInputType = {
    id?: true
    assessmentId?: true
    teamId?: true
    memberId?: true
    assessmentQuestionId?: true
    assessmentAssignId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssessmentQuestionAssignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentQuestionAssign to aggregate.
     */
    where?: AssessmentQuestionAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestionAssigns to fetch.
     */
    orderBy?: AssessmentQuestionAssignOrderByWithRelationInput | AssessmentQuestionAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentQuestionAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestionAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestionAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentQuestionAssigns
    **/
    _count?: true | AssessmentQuestionAssignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentQuestionAssignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentQuestionAssignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentQuestionAssignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentQuestionAssignMaxAggregateInputType
  }

  export type GetAssessmentQuestionAssignAggregateType<T extends AssessmentQuestionAssignAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentQuestionAssign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentQuestionAssign[P]>
      : GetScalarType<T[P], AggregateAssessmentQuestionAssign[P]>
  }




  export type AssessmentQuestionAssignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentQuestionAssignWhereInput
    orderBy?: AssessmentQuestionAssignOrderByWithAggregationInput | AssessmentQuestionAssignOrderByWithAggregationInput[]
    by: AssessmentQuestionAssignScalarFieldEnum[] | AssessmentQuestionAssignScalarFieldEnum
    having?: AssessmentQuestionAssignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentQuestionAssignCountAggregateInputType | true
    _avg?: AssessmentQuestionAssignAvgAggregateInputType
    _sum?: AssessmentQuestionAssignSumAggregateInputType
    _min?: AssessmentQuestionAssignMinAggregateInputType
    _max?: AssessmentQuestionAssignMaxAggregateInputType
  }

  export type AssessmentQuestionAssignGroupByOutputType = {
    id: number
    assessmentId: number
    teamId: number
    memberId: number
    assessmentQuestionId: number
    assessmentAssignId: number
    password: string | null
    rememberToken: string | null
    isActive: boolean
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: AssessmentQuestionAssignCountAggregateOutputType | null
    _avg: AssessmentQuestionAssignAvgAggregateOutputType | null
    _sum: AssessmentQuestionAssignSumAggregateOutputType | null
    _min: AssessmentQuestionAssignMinAggregateOutputType | null
    _max: AssessmentQuestionAssignMaxAggregateOutputType | null
  }

  type GetAssessmentQuestionAssignGroupByPayload<T extends AssessmentQuestionAssignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentQuestionAssignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentQuestionAssignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentQuestionAssignGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentQuestionAssignGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentQuestionAssignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assessmentId?: boolean
    teamId?: boolean
    memberId?: boolean
    assessmentQuestionId?: boolean
    assessmentAssignId?: boolean
    password?: boolean
    rememberToken?: boolean
    isActive?: boolean
    secretToken?: boolean
    tfaToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    Team?: boolean | TeamDefaultArgs<ExtArgs>
    Member?: boolean | TeamMemberDefaultArgs<ExtArgs>
    AssessmentQuestion?: boolean | AssessmentQuestionDefaultArgs<ExtArgs>
    AssessmentAssign?: boolean | AssessmentAssignDefaultArgs<ExtArgs>
    AssessmentQuestionAnswer?: boolean | AssessmentQuestionAssign$AssessmentQuestionAnswerArgs<ExtArgs>
    _count?: boolean | AssessmentQuestionAssignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentQuestionAssign"]>


  export type AssessmentQuestionAssignSelectScalar = {
    id?: boolean
    assessmentId?: boolean
    teamId?: boolean
    memberId?: boolean
    assessmentQuestionId?: boolean
    assessmentAssignId?: boolean
    password?: boolean
    rememberToken?: boolean
    isActive?: boolean
    secretToken?: boolean
    tfaToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssessmentQuestionAssignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Assessment?: boolean | AssessmentDefaultArgs<ExtArgs>
    Team?: boolean | TeamDefaultArgs<ExtArgs>
    Member?: boolean | TeamMemberDefaultArgs<ExtArgs>
    AssessmentQuestion?: boolean | AssessmentQuestionDefaultArgs<ExtArgs>
    AssessmentAssign?: boolean | AssessmentAssignDefaultArgs<ExtArgs>
    AssessmentQuestionAnswer?: boolean | AssessmentQuestionAssign$AssessmentQuestionAnswerArgs<ExtArgs>
    _count?: boolean | AssessmentQuestionAssignCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AssessmentQuestionAssignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentQuestionAssign"
    objects: {
      Assessment: Prisma.$AssessmentPayload<ExtArgs>
      Team: Prisma.$TeamPayload<ExtArgs>
      Member: Prisma.$TeamMemberPayload<ExtArgs>
      AssessmentQuestion: Prisma.$AssessmentQuestionPayload<ExtArgs>
      AssessmentAssign: Prisma.$AssessmentAssignPayload<ExtArgs>
      AssessmentQuestionAnswer: Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assessmentId: number
      teamId: number
      memberId: number
      assessmentQuestionId: number
      assessmentAssignId: number
      password: string | null
      rememberToken: string | null
      isActive: boolean
      secretToken: string | null
      tfaToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assessmentQuestionAssign"]>
    composites: {}
  }

  type AssessmentQuestionAssignGetPayload<S extends boolean | null | undefined | AssessmentQuestionAssignDefaultArgs> = $Result.GetResult<Prisma.$AssessmentQuestionAssignPayload, S>

  type AssessmentQuestionAssignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentQuestionAssignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentQuestionAssignCountAggregateInputType | true
    }

  export interface AssessmentQuestionAssignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentQuestionAssign'], meta: { name: 'AssessmentQuestionAssign' } }
    /**
     * Find zero or one AssessmentQuestionAssign that matches the filter.
     * @param {AssessmentQuestionAssignFindUniqueArgs} args - Arguments to find a AssessmentQuestionAssign
     * @example
     * // Get one AssessmentQuestionAssign
     * const assessmentQuestionAssign = await prisma.assessmentQuestionAssign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentQuestionAssignFindUniqueArgs>(args: SelectSubset<T, AssessmentQuestionAssignFindUniqueArgs<ExtArgs>>): Prisma__AssessmentQuestionAssignClient<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AssessmentQuestionAssign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssessmentQuestionAssignFindUniqueOrThrowArgs} args - Arguments to find a AssessmentQuestionAssign
     * @example
     * // Get one AssessmentQuestionAssign
     * const assessmentQuestionAssign = await prisma.assessmentQuestionAssign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentQuestionAssignFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentQuestionAssignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentQuestionAssignClient<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AssessmentQuestionAssign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAssignFindFirstArgs} args - Arguments to find a AssessmentQuestionAssign
     * @example
     * // Get one AssessmentQuestionAssign
     * const assessmentQuestionAssign = await prisma.assessmentQuestionAssign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentQuestionAssignFindFirstArgs>(args?: SelectSubset<T, AssessmentQuestionAssignFindFirstArgs<ExtArgs>>): Prisma__AssessmentQuestionAssignClient<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AssessmentQuestionAssign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAssignFindFirstOrThrowArgs} args - Arguments to find a AssessmentQuestionAssign
     * @example
     * // Get one AssessmentQuestionAssign
     * const assessmentQuestionAssign = await prisma.assessmentQuestionAssign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentQuestionAssignFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentQuestionAssignFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentQuestionAssignClient<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AssessmentQuestionAssigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAssignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentQuestionAssigns
     * const assessmentQuestionAssigns = await prisma.assessmentQuestionAssign.findMany()
     * 
     * // Get first 10 AssessmentQuestionAssigns
     * const assessmentQuestionAssigns = await prisma.assessmentQuestionAssign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentQuestionAssignWithIdOnly = await prisma.assessmentQuestionAssign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentQuestionAssignFindManyArgs>(args?: SelectSubset<T, AssessmentQuestionAssignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AssessmentQuestionAssign.
     * @param {AssessmentQuestionAssignCreateArgs} args - Arguments to create a AssessmentQuestionAssign.
     * @example
     * // Create one AssessmentQuestionAssign
     * const AssessmentQuestionAssign = await prisma.assessmentQuestionAssign.create({
     *   data: {
     *     // ... data to create a AssessmentQuestionAssign
     *   }
     * })
     * 
     */
    create<T extends AssessmentQuestionAssignCreateArgs>(args: SelectSubset<T, AssessmentQuestionAssignCreateArgs<ExtArgs>>): Prisma__AssessmentQuestionAssignClient<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AssessmentQuestionAssigns.
     * @param {AssessmentQuestionAssignCreateManyArgs} args - Arguments to create many AssessmentQuestionAssigns.
     * @example
     * // Create many AssessmentQuestionAssigns
     * const assessmentQuestionAssign = await prisma.assessmentQuestionAssign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentQuestionAssignCreateManyArgs>(args?: SelectSubset<T, AssessmentQuestionAssignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AssessmentQuestionAssign.
     * @param {AssessmentQuestionAssignDeleteArgs} args - Arguments to delete one AssessmentQuestionAssign.
     * @example
     * // Delete one AssessmentQuestionAssign
     * const AssessmentQuestionAssign = await prisma.assessmentQuestionAssign.delete({
     *   where: {
     *     // ... filter to delete one AssessmentQuestionAssign
     *   }
     * })
     * 
     */
    delete<T extends AssessmentQuestionAssignDeleteArgs>(args: SelectSubset<T, AssessmentQuestionAssignDeleteArgs<ExtArgs>>): Prisma__AssessmentQuestionAssignClient<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AssessmentQuestionAssign.
     * @param {AssessmentQuestionAssignUpdateArgs} args - Arguments to update one AssessmentQuestionAssign.
     * @example
     * // Update one AssessmentQuestionAssign
     * const assessmentQuestionAssign = await prisma.assessmentQuestionAssign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentQuestionAssignUpdateArgs>(args: SelectSubset<T, AssessmentQuestionAssignUpdateArgs<ExtArgs>>): Prisma__AssessmentQuestionAssignClient<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AssessmentQuestionAssigns.
     * @param {AssessmentQuestionAssignDeleteManyArgs} args - Arguments to filter AssessmentQuestionAssigns to delete.
     * @example
     * // Delete a few AssessmentQuestionAssigns
     * const { count } = await prisma.assessmentQuestionAssign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentQuestionAssignDeleteManyArgs>(args?: SelectSubset<T, AssessmentQuestionAssignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentQuestionAssigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAssignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentQuestionAssigns
     * const assessmentQuestionAssign = await prisma.assessmentQuestionAssign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentQuestionAssignUpdateManyArgs>(args: SelectSubset<T, AssessmentQuestionAssignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssessmentQuestionAssign.
     * @param {AssessmentQuestionAssignUpsertArgs} args - Arguments to update or create a AssessmentQuestionAssign.
     * @example
     * // Update or create a AssessmentQuestionAssign
     * const assessmentQuestionAssign = await prisma.assessmentQuestionAssign.upsert({
     *   create: {
     *     // ... data to create a AssessmentQuestionAssign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentQuestionAssign we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentQuestionAssignUpsertArgs>(args: SelectSubset<T, AssessmentQuestionAssignUpsertArgs<ExtArgs>>): Prisma__AssessmentQuestionAssignClient<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AssessmentQuestionAssigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAssignCountArgs} args - Arguments to filter AssessmentQuestionAssigns to count.
     * @example
     * // Count the number of AssessmentQuestionAssigns
     * const count = await prisma.assessmentQuestionAssign.count({
     *   where: {
     *     // ... the filter for the AssessmentQuestionAssigns we want to count
     *   }
     * })
    **/
    count<T extends AssessmentQuestionAssignCountArgs>(
      args?: Subset<T, AssessmentQuestionAssignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentQuestionAssignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentQuestionAssign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAssignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentQuestionAssignAggregateArgs>(args: Subset<T, AssessmentQuestionAssignAggregateArgs>): Prisma.PrismaPromise<GetAssessmentQuestionAssignAggregateType<T>>

    /**
     * Group by AssessmentQuestionAssign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentQuestionAssignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentQuestionAssignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentQuestionAssignGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentQuestionAssignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentQuestionAssignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentQuestionAssignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentQuestionAssign model
   */
  readonly fields: AssessmentQuestionAssignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentQuestionAssign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentQuestionAssignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Assessment<T extends AssessmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentDefaultArgs<ExtArgs>>): Prisma__AssessmentClient<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Member<T extends TeamMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamMemberDefaultArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AssessmentQuestion<T extends AssessmentQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentQuestionDefaultArgs<ExtArgs>>): Prisma__AssessmentQuestionClient<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AssessmentAssign<T extends AssessmentAssignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentAssignDefaultArgs<ExtArgs>>): Prisma__AssessmentAssignClient<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AssessmentQuestionAnswer<T extends AssessmentQuestionAssign$AssessmentQuestionAnswerArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentQuestionAssign$AssessmentQuestionAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssessmentQuestionAssign model
   */ 
  interface AssessmentQuestionAssignFieldRefs {
    readonly id: FieldRef<"AssessmentQuestionAssign", 'Int'>
    readonly assessmentId: FieldRef<"AssessmentQuestionAssign", 'Int'>
    readonly teamId: FieldRef<"AssessmentQuestionAssign", 'Int'>
    readonly memberId: FieldRef<"AssessmentQuestionAssign", 'Int'>
    readonly assessmentQuestionId: FieldRef<"AssessmentQuestionAssign", 'Int'>
    readonly assessmentAssignId: FieldRef<"AssessmentQuestionAssign", 'Int'>
    readonly password: FieldRef<"AssessmentQuestionAssign", 'String'>
    readonly rememberToken: FieldRef<"AssessmentQuestionAssign", 'String'>
    readonly isActive: FieldRef<"AssessmentQuestionAssign", 'Boolean'>
    readonly secretToken: FieldRef<"AssessmentQuestionAssign", 'String'>
    readonly tfaToken: FieldRef<"AssessmentQuestionAssign", 'String'>
    readonly createdAt: FieldRef<"AssessmentQuestionAssign", 'DateTime'>
    readonly updatedAt: FieldRef<"AssessmentQuestionAssign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentQuestionAssign findUnique
   */
  export type AssessmentQuestionAssignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestionAssign to fetch.
     */
    where: AssessmentQuestionAssignWhereUniqueInput
  }

  /**
   * AssessmentQuestionAssign findUniqueOrThrow
   */
  export type AssessmentQuestionAssignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestionAssign to fetch.
     */
    where: AssessmentQuestionAssignWhereUniqueInput
  }

  /**
   * AssessmentQuestionAssign findFirst
   */
  export type AssessmentQuestionAssignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestionAssign to fetch.
     */
    where?: AssessmentQuestionAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestionAssigns to fetch.
     */
    orderBy?: AssessmentQuestionAssignOrderByWithRelationInput | AssessmentQuestionAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentQuestionAssigns.
     */
    cursor?: AssessmentQuestionAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestionAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestionAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentQuestionAssigns.
     */
    distinct?: AssessmentQuestionAssignScalarFieldEnum | AssessmentQuestionAssignScalarFieldEnum[]
  }

  /**
   * AssessmentQuestionAssign findFirstOrThrow
   */
  export type AssessmentQuestionAssignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestionAssign to fetch.
     */
    where?: AssessmentQuestionAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestionAssigns to fetch.
     */
    orderBy?: AssessmentQuestionAssignOrderByWithRelationInput | AssessmentQuestionAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentQuestionAssigns.
     */
    cursor?: AssessmentQuestionAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestionAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestionAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentQuestionAssigns.
     */
    distinct?: AssessmentQuestionAssignScalarFieldEnum | AssessmentQuestionAssignScalarFieldEnum[]
  }

  /**
   * AssessmentQuestionAssign findMany
   */
  export type AssessmentQuestionAssignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentQuestionAssigns to fetch.
     */
    where?: AssessmentQuestionAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentQuestionAssigns to fetch.
     */
    orderBy?: AssessmentQuestionAssignOrderByWithRelationInput | AssessmentQuestionAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentQuestionAssigns.
     */
    cursor?: AssessmentQuestionAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentQuestionAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentQuestionAssigns.
     */
    skip?: number
    distinct?: AssessmentQuestionAssignScalarFieldEnum | AssessmentQuestionAssignScalarFieldEnum[]
  }

  /**
   * AssessmentQuestionAssign create
   */
  export type AssessmentQuestionAssignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentQuestionAssign.
     */
    data: XOR<AssessmentQuestionAssignCreateInput, AssessmentQuestionAssignUncheckedCreateInput>
  }

  /**
   * AssessmentQuestionAssign createMany
   */
  export type AssessmentQuestionAssignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentQuestionAssigns.
     */
    data: AssessmentQuestionAssignCreateManyInput | AssessmentQuestionAssignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentQuestionAssign update
   */
  export type AssessmentQuestionAssignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentQuestionAssign.
     */
    data: XOR<AssessmentQuestionAssignUpdateInput, AssessmentQuestionAssignUncheckedUpdateInput>
    /**
     * Choose, which AssessmentQuestionAssign to update.
     */
    where: AssessmentQuestionAssignWhereUniqueInput
  }

  /**
   * AssessmentQuestionAssign updateMany
   */
  export type AssessmentQuestionAssignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentQuestionAssigns.
     */
    data: XOR<AssessmentQuestionAssignUpdateManyMutationInput, AssessmentQuestionAssignUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentQuestionAssigns to update
     */
    where?: AssessmentQuestionAssignWhereInput
  }

  /**
   * AssessmentQuestionAssign upsert
   */
  export type AssessmentQuestionAssignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentQuestionAssign to update in case it exists.
     */
    where: AssessmentQuestionAssignWhereUniqueInput
    /**
     * In case the AssessmentQuestionAssign found by the `where` argument doesn't exist, create a new AssessmentQuestionAssign with this data.
     */
    create: XOR<AssessmentQuestionAssignCreateInput, AssessmentQuestionAssignUncheckedCreateInput>
    /**
     * In case the AssessmentQuestionAssign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentQuestionAssignUpdateInput, AssessmentQuestionAssignUncheckedUpdateInput>
  }

  /**
   * AssessmentQuestionAssign delete
   */
  export type AssessmentQuestionAssignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    /**
     * Filter which AssessmentQuestionAssign to delete.
     */
    where: AssessmentQuestionAssignWhereUniqueInput
  }

  /**
   * AssessmentQuestionAssign deleteMany
   */
  export type AssessmentQuestionAssignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentQuestionAssigns to delete
     */
    where?: AssessmentQuestionAssignWhereInput
  }

  /**
   * AssessmentQuestionAssign.AssessmentQuestionAnswer
   */
  export type AssessmentQuestionAssign$AssessmentQuestionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
    where?: AssessmentQuestionAnswerWhereInput
    orderBy?: AssessmentQuestionAnswerOrderByWithRelationInput | AssessmentQuestionAnswerOrderByWithRelationInput[]
    cursor?: AssessmentQuestionAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentQuestionAnswerScalarFieldEnum | AssessmentQuestionAnswerScalarFieldEnum[]
  }

  /**
   * AssessmentQuestionAssign without action
   */
  export type AssessmentQuestionAssignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
  }


  /**
   * Model Organisation
   */

  export type AggregateOrganisation = {
    _count: OrganisationCountAggregateOutputType | null
    _avg: OrganisationAvgAggregateOutputType | null
    _sum: OrganisationSumAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  export type OrganisationAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type OrganisationSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type OrganisationMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganisationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    ownerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganisationCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganisationAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type OrganisationSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type OrganisationMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganisationMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganisationCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganisationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisation to aggregate.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organisations
    **/
    _count?: true | OrganisationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganisationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganisationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganisationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganisationMaxAggregateInputType
  }

  export type GetOrganisationAggregateType<T extends OrganisationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganisation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganisation[P]>
      : GetScalarType<T[P], AggregateOrganisation[P]>
  }




  export type OrganisationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganisationWhereInput
    orderBy?: OrganisationOrderByWithAggregationInput | OrganisationOrderByWithAggregationInput[]
    by: OrganisationScalarFieldEnum[] | OrganisationScalarFieldEnum
    having?: OrganisationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganisationCountAggregateInputType | true
    _avg?: OrganisationAvgAggregateInputType
    _sum?: OrganisationSumAggregateInputType
    _min?: OrganisationMinAggregateInputType
    _max?: OrganisationMaxAggregateInputType
  }

  export type OrganisationGroupByOutputType = {
    id: number
    name: string
    description: string
    isActive: boolean
    ownerId: number
    createdAt: Date
    updatedAt: Date
    _count: OrganisationCountAggregateOutputType | null
    _avg: OrganisationAvgAggregateOutputType | null
    _sum: OrganisationSumAggregateOutputType | null
    _min: OrganisationMinAggregateOutputType | null
    _max: OrganisationMaxAggregateOutputType | null
  }

  type GetOrganisationGroupByPayload<T extends OrganisationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganisationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganisationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganisationGroupByOutputType[P]>
        }
      >
    >


  export type OrganisationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Owner?: boolean | UserDefaultArgs<ExtArgs>
    Assessment?: boolean | Organisation$AssessmentArgs<ExtArgs>
    Team?: boolean | Organisation$TeamArgs<ExtArgs>
    _count?: boolean | OrganisationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organisation"]>


  export type OrganisationSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganisationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Owner?: boolean | UserDefaultArgs<ExtArgs>
    Assessment?: boolean | Organisation$AssessmentArgs<ExtArgs>
    Team?: boolean | Organisation$TeamArgs<ExtArgs>
    _count?: boolean | OrganisationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrganisationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organisation"
    objects: {
      Owner: Prisma.$UserPayload<ExtArgs>
      Assessment: Prisma.$AssessmentPayload<ExtArgs>[]
      Team: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      isActive: boolean
      ownerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organisation"]>
    composites: {}
  }

  type OrganisationGetPayload<S extends boolean | null | undefined | OrganisationDefaultArgs> = $Result.GetResult<Prisma.$OrganisationPayload, S>

  type OrganisationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganisationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganisationCountAggregateInputType | true
    }

  export interface OrganisationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organisation'], meta: { name: 'Organisation' } }
    /**
     * Find zero or one Organisation that matches the filter.
     * @param {OrganisationFindUniqueArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganisationFindUniqueArgs>(args: SelectSubset<T, OrganisationFindUniqueArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organisation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganisationFindUniqueOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganisationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganisationFindFirstArgs>(args?: SelectSubset<T, OrganisationFindFirstArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organisation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindFirstOrThrowArgs} args - Arguments to find a Organisation
     * @example
     * // Get one Organisation
     * const organisation = await prisma.organisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganisationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganisationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisations
     * const organisations = await prisma.organisation.findMany()
     * 
     * // Get first 10 Organisations
     * const organisations = await prisma.organisation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organisationWithIdOnly = await prisma.organisation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganisationFindManyArgs>(args?: SelectSubset<T, OrganisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organisation.
     * @param {OrganisationCreateArgs} args - Arguments to create a Organisation.
     * @example
     * // Create one Organisation
     * const Organisation = await prisma.organisation.create({
     *   data: {
     *     // ... data to create a Organisation
     *   }
     * })
     * 
     */
    create<T extends OrganisationCreateArgs>(args: SelectSubset<T, OrganisationCreateArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organisations.
     * @param {OrganisationCreateManyArgs} args - Arguments to create many Organisations.
     * @example
     * // Create many Organisations
     * const organisation = await prisma.organisation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganisationCreateManyArgs>(args?: SelectSubset<T, OrganisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organisation.
     * @param {OrganisationDeleteArgs} args - Arguments to delete one Organisation.
     * @example
     * // Delete one Organisation
     * const Organisation = await prisma.organisation.delete({
     *   where: {
     *     // ... filter to delete one Organisation
     *   }
     * })
     * 
     */
    delete<T extends OrganisationDeleteArgs>(args: SelectSubset<T, OrganisationDeleteArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organisation.
     * @param {OrganisationUpdateArgs} args - Arguments to update one Organisation.
     * @example
     * // Update one Organisation
     * const organisation = await prisma.organisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganisationUpdateArgs>(args: SelectSubset<T, OrganisationUpdateArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organisations.
     * @param {OrganisationDeleteManyArgs} args - Arguments to filter Organisations to delete.
     * @example
     * // Delete a few Organisations
     * const { count } = await prisma.organisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganisationDeleteManyArgs>(args?: SelectSubset<T, OrganisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisations
     * const organisation = await prisma.organisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganisationUpdateManyArgs>(args: SelectSubset<T, OrganisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organisation.
     * @param {OrganisationUpsertArgs} args - Arguments to update or create a Organisation.
     * @example
     * // Update or create a Organisation
     * const organisation = await prisma.organisation.upsert({
     *   create: {
     *     // ... data to create a Organisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organisation we want to update
     *   }
     * })
     */
    upsert<T extends OrganisationUpsertArgs>(args: SelectSubset<T, OrganisationUpsertArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationCountArgs} args - Arguments to filter Organisations to count.
     * @example
     * // Count the number of Organisations
     * const count = await prisma.organisation.count({
     *   where: {
     *     // ... the filter for the Organisations we want to count
     *   }
     * })
    **/
    count<T extends OrganisationCountArgs>(
      args?: Subset<T, OrganisationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganisationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganisationAggregateArgs>(args: Subset<T, OrganisationAggregateArgs>): Prisma.PrismaPromise<GetOrganisationAggregateType<T>>

    /**
     * Group by Organisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganisationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganisationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganisationGroupByArgs['orderBy'] }
        : { orderBy?: OrganisationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organisation model
   */
  readonly fields: OrganisationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organisation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganisationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Assessment<T extends Organisation$AssessmentArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$AssessmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentPayload<ExtArgs>, T, "findMany"> | Null>
    Team<T extends Organisation$TeamArgs<ExtArgs> = {}>(args?: Subset<T, Organisation$TeamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organisation model
   */ 
  interface OrganisationFieldRefs {
    readonly id: FieldRef<"Organisation", 'Int'>
    readonly name: FieldRef<"Organisation", 'String'>
    readonly description: FieldRef<"Organisation", 'String'>
    readonly isActive: FieldRef<"Organisation", 'Boolean'>
    readonly ownerId: FieldRef<"Organisation", 'Int'>
    readonly createdAt: FieldRef<"Organisation", 'DateTime'>
    readonly updatedAt: FieldRef<"Organisation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organisation findUnique
   */
  export type OrganisationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation findUniqueOrThrow
   */
  export type OrganisationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation findFirst
   */
  export type OrganisationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * Organisation findFirstOrThrow
   */
  export type OrganisationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisation to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisations.
     */
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * Organisation findMany
   */
  export type OrganisationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter, which Organisations to fetch.
     */
    where?: OrganisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisations to fetch.
     */
    orderBy?: OrganisationOrderByWithRelationInput | OrganisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organisations.
     */
    cursor?: OrganisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisations.
     */
    skip?: number
    distinct?: OrganisationScalarFieldEnum | OrganisationScalarFieldEnum[]
  }

  /**
   * Organisation create
   */
  export type OrganisationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organisation.
     */
    data: XOR<OrganisationCreateInput, OrganisationUncheckedCreateInput>
  }

  /**
   * Organisation createMany
   */
  export type OrganisationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organisations.
     */
    data: OrganisationCreateManyInput | OrganisationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organisation update
   */
  export type OrganisationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organisation.
     */
    data: XOR<OrganisationUpdateInput, OrganisationUncheckedUpdateInput>
    /**
     * Choose, which Organisation to update.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation updateMany
   */
  export type OrganisationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organisations.
     */
    data: XOR<OrganisationUpdateManyMutationInput, OrganisationUncheckedUpdateManyInput>
    /**
     * Filter which Organisations to update
     */
    where?: OrganisationWhereInput
  }

  /**
   * Organisation upsert
   */
  export type OrganisationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organisation to update in case it exists.
     */
    where: OrganisationWhereUniqueInput
    /**
     * In case the Organisation found by the `where` argument doesn't exist, create a new Organisation with this data.
     */
    create: XOR<OrganisationCreateInput, OrganisationUncheckedCreateInput>
    /**
     * In case the Organisation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganisationUpdateInput, OrganisationUncheckedUpdateInput>
  }

  /**
   * Organisation delete
   */
  export type OrganisationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    /**
     * Filter which Organisation to delete.
     */
    where: OrganisationWhereUniqueInput
  }

  /**
   * Organisation deleteMany
   */
  export type OrganisationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisations to delete
     */
    where?: OrganisationWhereInput
  }

  /**
   * Organisation.Assessment
   */
  export type Organisation$AssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assessment
     */
    select?: AssessmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentInclude<ExtArgs> | null
    where?: AssessmentWhereInput
    orderBy?: AssessmentOrderByWithRelationInput | AssessmentOrderByWithRelationInput[]
    cursor?: AssessmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentScalarFieldEnum | AssessmentScalarFieldEnum[]
  }

  /**
   * Organisation.Team
   */
  export type Organisation$TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Organisation without action
   */
  export type OrganisationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    questionType: $Enums.QuestionType | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    questionType: $Enums.QuestionType | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    questionType: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    questionType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    questionType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    questionType?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    name: string
    description: string | null
    questionType: $Enums.QuestionType | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    questionType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    AssessmentQuestion?: boolean | Question$AssessmentQuestionArgs<ExtArgs>
    AuestionAnswer?: boolean | Question$AuestionAnswerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>


  export type QuestionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    questionType?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AssessmentQuestion?: boolean | Question$AssessmentQuestionArgs<ExtArgs>
    AuestionAnswer?: boolean | Question$AuestionAnswerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      AssessmentQuestion: Prisma.$AssessmentQuestionPayload<ExtArgs>[]
      AuestionAnswer: Prisma.$AuestionAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      questionType: $Enums.QuestionType | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AssessmentQuestion<T extends Question$AssessmentQuestionArgs<ExtArgs> = {}>(args?: Subset<T, Question$AssessmentQuestionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionPayload<ExtArgs>, T, "findMany"> | Null>
    AuestionAnswer<T extends Question$AuestionAnswerArgs<ExtArgs> = {}>(args?: Subset<T, Question$AuestionAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuestionAnswerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly name: FieldRef<"Question", 'String'>
    readonly description: FieldRef<"Question", 'String'>
    readonly questionType: FieldRef<"Question", 'QuestionType'>
    readonly isActive: FieldRef<"Question", 'Boolean'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }

  /**
   * Question.AssessmentQuestion
   */
  export type Question$AssessmentQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestion
     */
    select?: AssessmentQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionInclude<ExtArgs> | null
    where?: AssessmentQuestionWhereInput
    orderBy?: AssessmentQuestionOrderByWithRelationInput | AssessmentQuestionOrderByWithRelationInput[]
    cursor?: AssessmentQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentQuestionScalarFieldEnum | AssessmentQuestionScalarFieldEnum[]
  }

  /**
   * Question.AuestionAnswer
   */
  export type Question$AuestionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswer
     */
    select?: AuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuestionAnswerInclude<ExtArgs> | null
    where?: AuestionAnswerWhereInput
    orderBy?: AuestionAnswerOrderByWithRelationInput | AuestionAnswerOrderByWithRelationInput[]
    cursor?: AuestionAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuestionAnswerScalarFieldEnum | AuestionAnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model AuestionAnswer
   */

  export type AggregateAuestionAnswer = {
    _count: AuestionAnswerCountAggregateOutputType | null
    _avg: AuestionAnswerAvgAggregateOutputType | null
    _sum: AuestionAnswerSumAggregateOutputType | null
    _min: AuestionAnswerMinAggregateOutputType | null
    _max: AuestionAnswerMaxAggregateOutputType | null
  }

  export type AuestionAnswerAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type AuestionAnswerSumAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type AuestionAnswerMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    questionId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuestionAnswerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    questionId: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuestionAnswerCountAggregateOutputType = {
    id: number
    name: number
    description: number
    questionId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuestionAnswerAvgAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type AuestionAnswerSumAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type AuestionAnswerMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    questionId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuestionAnswerMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    questionId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuestionAnswerCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    questionId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuestionAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuestionAnswer to aggregate.
     */
    where?: AuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuestionAnswers to fetch.
     */
    orderBy?: AuestionAnswerOrderByWithRelationInput | AuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuestionAnswers
    **/
    _count?: true | AuestionAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuestionAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuestionAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuestionAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuestionAnswerMaxAggregateInputType
  }

  export type GetAuestionAnswerAggregateType<T extends AuestionAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAuestionAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuestionAnswer[P]>
      : GetScalarType<T[P], AggregateAuestionAnswer[P]>
  }




  export type AuestionAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuestionAnswerWhereInput
    orderBy?: AuestionAnswerOrderByWithAggregationInput | AuestionAnswerOrderByWithAggregationInput[]
    by: AuestionAnswerScalarFieldEnum[] | AuestionAnswerScalarFieldEnum
    having?: AuestionAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuestionAnswerCountAggregateInputType | true
    _avg?: AuestionAnswerAvgAggregateInputType
    _sum?: AuestionAnswerSumAggregateInputType
    _min?: AuestionAnswerMinAggregateInputType
    _max?: AuestionAnswerMaxAggregateInputType
  }

  export type AuestionAnswerGroupByOutputType = {
    id: number
    name: string
    description: string | null
    questionId: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AuestionAnswerCountAggregateOutputType | null
    _avg: AuestionAnswerAvgAggregateOutputType | null
    _sum: AuestionAnswerSumAggregateOutputType | null
    _min: AuestionAnswerMinAggregateOutputType | null
    _max: AuestionAnswerMaxAggregateOutputType | null
  }

  type GetAuestionAnswerGroupByPayload<T extends AuestionAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuestionAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuestionAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuestionAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AuestionAnswerGroupByOutputType[P]>
        }
      >
    >


  export type AuestionAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    questionId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    AssessmentQuestionAnswer?: boolean | AuestionAnswer$AssessmentQuestionAnswerArgs<ExtArgs>
    _count?: boolean | AuestionAnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auestionAnswer"]>


  export type AuestionAnswerSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    questionId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuestionAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Question?: boolean | QuestionDefaultArgs<ExtArgs>
    AssessmentQuestionAnswer?: boolean | AuestionAnswer$AssessmentQuestionAnswerArgs<ExtArgs>
    _count?: boolean | AuestionAnswerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AuestionAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuestionAnswer"
    objects: {
      Question: Prisma.$QuestionPayload<ExtArgs>
      AssessmentQuestionAnswer: Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      questionId: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["auestionAnswer"]>
    composites: {}
  }

  type AuestionAnswerGetPayload<S extends boolean | null | undefined | AuestionAnswerDefaultArgs> = $Result.GetResult<Prisma.$AuestionAnswerPayload, S>

  type AuestionAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuestionAnswerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuestionAnswerCountAggregateInputType | true
    }

  export interface AuestionAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuestionAnswer'], meta: { name: 'AuestionAnswer' } }
    /**
     * Find zero or one AuestionAnswer that matches the filter.
     * @param {AuestionAnswerFindUniqueArgs} args - Arguments to find a AuestionAnswer
     * @example
     * // Get one AuestionAnswer
     * const auestionAnswer = await prisma.auestionAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuestionAnswerFindUniqueArgs>(args: SelectSubset<T, AuestionAnswerFindUniqueArgs<ExtArgs>>): Prisma__AuestionAnswerClient<$Result.GetResult<Prisma.$AuestionAnswerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuestionAnswer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuestionAnswerFindUniqueOrThrowArgs} args - Arguments to find a AuestionAnswer
     * @example
     * // Get one AuestionAnswer
     * const auestionAnswer = await prisma.auestionAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuestionAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AuestionAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuestionAnswerClient<$Result.GetResult<Prisma.$AuestionAnswerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuestionAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuestionAnswerFindFirstArgs} args - Arguments to find a AuestionAnswer
     * @example
     * // Get one AuestionAnswer
     * const auestionAnswer = await prisma.auestionAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuestionAnswerFindFirstArgs>(args?: SelectSubset<T, AuestionAnswerFindFirstArgs<ExtArgs>>): Prisma__AuestionAnswerClient<$Result.GetResult<Prisma.$AuestionAnswerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuestionAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuestionAnswerFindFirstOrThrowArgs} args - Arguments to find a AuestionAnswer
     * @example
     * // Get one AuestionAnswer
     * const auestionAnswer = await prisma.auestionAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuestionAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AuestionAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuestionAnswerClient<$Result.GetResult<Prisma.$AuestionAnswerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuestionAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuestionAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuestionAnswers
     * const auestionAnswers = await prisma.auestionAnswer.findMany()
     * 
     * // Get first 10 AuestionAnswers
     * const auestionAnswers = await prisma.auestionAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auestionAnswerWithIdOnly = await prisma.auestionAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuestionAnswerFindManyArgs>(args?: SelectSubset<T, AuestionAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuestionAnswerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuestionAnswer.
     * @param {AuestionAnswerCreateArgs} args - Arguments to create a AuestionAnswer.
     * @example
     * // Create one AuestionAnswer
     * const AuestionAnswer = await prisma.auestionAnswer.create({
     *   data: {
     *     // ... data to create a AuestionAnswer
     *   }
     * })
     * 
     */
    create<T extends AuestionAnswerCreateArgs>(args: SelectSubset<T, AuestionAnswerCreateArgs<ExtArgs>>): Prisma__AuestionAnswerClient<$Result.GetResult<Prisma.$AuestionAnswerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuestionAnswers.
     * @param {AuestionAnswerCreateManyArgs} args - Arguments to create many AuestionAnswers.
     * @example
     * // Create many AuestionAnswers
     * const auestionAnswer = await prisma.auestionAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuestionAnswerCreateManyArgs>(args?: SelectSubset<T, AuestionAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuestionAnswer.
     * @param {AuestionAnswerDeleteArgs} args - Arguments to delete one AuestionAnswer.
     * @example
     * // Delete one AuestionAnswer
     * const AuestionAnswer = await prisma.auestionAnswer.delete({
     *   where: {
     *     // ... filter to delete one AuestionAnswer
     *   }
     * })
     * 
     */
    delete<T extends AuestionAnswerDeleteArgs>(args: SelectSubset<T, AuestionAnswerDeleteArgs<ExtArgs>>): Prisma__AuestionAnswerClient<$Result.GetResult<Prisma.$AuestionAnswerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuestionAnswer.
     * @param {AuestionAnswerUpdateArgs} args - Arguments to update one AuestionAnswer.
     * @example
     * // Update one AuestionAnswer
     * const auestionAnswer = await prisma.auestionAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuestionAnswerUpdateArgs>(args: SelectSubset<T, AuestionAnswerUpdateArgs<ExtArgs>>): Prisma__AuestionAnswerClient<$Result.GetResult<Prisma.$AuestionAnswerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuestionAnswers.
     * @param {AuestionAnswerDeleteManyArgs} args - Arguments to filter AuestionAnswers to delete.
     * @example
     * // Delete a few AuestionAnswers
     * const { count } = await prisma.auestionAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuestionAnswerDeleteManyArgs>(args?: SelectSubset<T, AuestionAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuestionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuestionAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuestionAnswers
     * const auestionAnswer = await prisma.auestionAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuestionAnswerUpdateManyArgs>(args: SelectSubset<T, AuestionAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuestionAnswer.
     * @param {AuestionAnswerUpsertArgs} args - Arguments to update or create a AuestionAnswer.
     * @example
     * // Update or create a AuestionAnswer
     * const auestionAnswer = await prisma.auestionAnswer.upsert({
     *   create: {
     *     // ... data to create a AuestionAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuestionAnswer we want to update
     *   }
     * })
     */
    upsert<T extends AuestionAnswerUpsertArgs>(args: SelectSubset<T, AuestionAnswerUpsertArgs<ExtArgs>>): Prisma__AuestionAnswerClient<$Result.GetResult<Prisma.$AuestionAnswerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuestionAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuestionAnswerCountArgs} args - Arguments to filter AuestionAnswers to count.
     * @example
     * // Count the number of AuestionAnswers
     * const count = await prisma.auestionAnswer.count({
     *   where: {
     *     // ... the filter for the AuestionAnswers we want to count
     *   }
     * })
    **/
    count<T extends AuestionAnswerCountArgs>(
      args?: Subset<T, AuestionAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuestionAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuestionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuestionAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuestionAnswerAggregateArgs>(args: Subset<T, AuestionAnswerAggregateArgs>): Prisma.PrismaPromise<GetAuestionAnswerAggregateType<T>>

    /**
     * Group by AuestionAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuestionAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuestionAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuestionAnswerGroupByArgs['orderBy'] }
        : { orderBy?: AuestionAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuestionAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuestionAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuestionAnswer model
   */
  readonly fields: AuestionAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuestionAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuestionAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AssessmentQuestionAnswer<T extends AuestionAnswer$AssessmentQuestionAnswerArgs<ExtArgs> = {}>(args?: Subset<T, AuestionAnswer$AssessmentQuestionAnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionAnswerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuestionAnswer model
   */ 
  interface AuestionAnswerFieldRefs {
    readonly id: FieldRef<"AuestionAnswer", 'Int'>
    readonly name: FieldRef<"AuestionAnswer", 'String'>
    readonly description: FieldRef<"AuestionAnswer", 'String'>
    readonly questionId: FieldRef<"AuestionAnswer", 'Int'>
    readonly isActive: FieldRef<"AuestionAnswer", 'Boolean'>
    readonly createdAt: FieldRef<"AuestionAnswer", 'DateTime'>
    readonly updatedAt: FieldRef<"AuestionAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuestionAnswer findUnique
   */
  export type AuestionAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswer
     */
    select?: AuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AuestionAnswer to fetch.
     */
    where: AuestionAnswerWhereUniqueInput
  }

  /**
   * AuestionAnswer findUniqueOrThrow
   */
  export type AuestionAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswer
     */
    select?: AuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AuestionAnswer to fetch.
     */
    where: AuestionAnswerWhereUniqueInput
  }

  /**
   * AuestionAnswer findFirst
   */
  export type AuestionAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswer
     */
    select?: AuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AuestionAnswer to fetch.
     */
    where?: AuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuestionAnswers to fetch.
     */
    orderBy?: AuestionAnswerOrderByWithRelationInput | AuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuestionAnswers.
     */
    cursor?: AuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuestionAnswers.
     */
    distinct?: AuestionAnswerScalarFieldEnum | AuestionAnswerScalarFieldEnum[]
  }

  /**
   * AuestionAnswer findFirstOrThrow
   */
  export type AuestionAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswer
     */
    select?: AuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AuestionAnswer to fetch.
     */
    where?: AuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuestionAnswers to fetch.
     */
    orderBy?: AuestionAnswerOrderByWithRelationInput | AuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuestionAnswers.
     */
    cursor?: AuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuestionAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuestionAnswers.
     */
    distinct?: AuestionAnswerScalarFieldEnum | AuestionAnswerScalarFieldEnum[]
  }

  /**
   * AuestionAnswer findMany
   */
  export type AuestionAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswer
     */
    select?: AuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter, which AuestionAnswers to fetch.
     */
    where?: AuestionAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuestionAnswers to fetch.
     */
    orderBy?: AuestionAnswerOrderByWithRelationInput | AuestionAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuestionAnswers.
     */
    cursor?: AuestionAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuestionAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuestionAnswers.
     */
    skip?: number
    distinct?: AuestionAnswerScalarFieldEnum | AuestionAnswerScalarFieldEnum[]
  }

  /**
   * AuestionAnswer create
   */
  export type AuestionAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswer
     */
    select?: AuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuestionAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a AuestionAnswer.
     */
    data: XOR<AuestionAnswerCreateInput, AuestionAnswerUncheckedCreateInput>
  }

  /**
   * AuestionAnswer createMany
   */
  export type AuestionAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuestionAnswers.
     */
    data: AuestionAnswerCreateManyInput | AuestionAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuestionAnswer update
   */
  export type AuestionAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswer
     */
    select?: AuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuestionAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a AuestionAnswer.
     */
    data: XOR<AuestionAnswerUpdateInput, AuestionAnswerUncheckedUpdateInput>
    /**
     * Choose, which AuestionAnswer to update.
     */
    where: AuestionAnswerWhereUniqueInput
  }

  /**
   * AuestionAnswer updateMany
   */
  export type AuestionAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuestionAnswers.
     */
    data: XOR<AuestionAnswerUpdateManyMutationInput, AuestionAnswerUncheckedUpdateManyInput>
    /**
     * Filter which AuestionAnswers to update
     */
    where?: AuestionAnswerWhereInput
  }

  /**
   * AuestionAnswer upsert
   */
  export type AuestionAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswer
     */
    select?: AuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuestionAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the AuestionAnswer to update in case it exists.
     */
    where: AuestionAnswerWhereUniqueInput
    /**
     * In case the AuestionAnswer found by the `where` argument doesn't exist, create a new AuestionAnswer with this data.
     */
    create: XOR<AuestionAnswerCreateInput, AuestionAnswerUncheckedCreateInput>
    /**
     * In case the AuestionAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuestionAnswerUpdateInput, AuestionAnswerUncheckedUpdateInput>
  }

  /**
   * AuestionAnswer delete
   */
  export type AuestionAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswer
     */
    select?: AuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuestionAnswerInclude<ExtArgs> | null
    /**
     * Filter which AuestionAnswer to delete.
     */
    where: AuestionAnswerWhereUniqueInput
  }

  /**
   * AuestionAnswer deleteMany
   */
  export type AuestionAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuestionAnswers to delete
     */
    where?: AuestionAnswerWhereInput
  }

  /**
   * AuestionAnswer.AssessmentQuestionAnswer
   */
  export type AuestionAnswer$AssessmentQuestionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAnswer
     */
    select?: AssessmentQuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAnswerInclude<ExtArgs> | null
    where?: AssessmentQuestionAnswerWhereInput
    orderBy?: AssessmentQuestionAnswerOrderByWithRelationInput | AssessmentQuestionAnswerOrderByWithRelationInput[]
    cursor?: AssessmentQuestionAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentQuestionAnswerScalarFieldEnum | AssessmentQuestionAnswerScalarFieldEnum[]
  }

  /**
   * AuestionAnswer without action
   */
  export type AuestionAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuestionAnswer
     */
    select?: AuestionAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuestionAnswerInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserRole?: boolean | Role$UserRoleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>


  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | Role$UserRoleArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      UserRole: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserRole<T extends Role$UserRoleArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly isActive: FieldRef<"Role", 'Boolean'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.UserRole
   */
  export type Role$UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    organisationId: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    organisationId: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    logo: string | null
    organisationId: number | null
    password: string | null
    rememberToken: string | null
    isActive: boolean | null
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    logo: string | null
    organisationId: number | null
    password: string | null
    rememberToken: string | null
    isActive: boolean | null
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    description: number
    logo: number
    organisationId: number
    password: number
    rememberToken: number
    isActive: number
    secretToken: number
    tfaToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    organisationId?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    organisationId?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    logo?: true
    organisationId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    logo?: true
    organisationId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    logo?: true
    organisationId?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    description: string | null
    logo: string | null
    organisationId: number
    password: string | null
    rememberToken: string | null
    isActive: boolean
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    logo?: boolean
    organisationId?: boolean
    password?: boolean
    rememberToken?: boolean
    isActive?: boolean
    secretToken?: boolean
    tfaToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    AssessmentAssign?: boolean | Team$AssessmentAssignArgs<ExtArgs>
    AssessmentQuestionAssign?: boolean | Team$AssessmentQuestionAssignArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>


  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    logo?: boolean
    organisationId?: boolean
    password?: boolean
    rememberToken?: boolean
    isActive?: boolean
    secretToken?: boolean
    tfaToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organisation?: boolean | OrganisationDefaultArgs<ExtArgs>
    AssessmentAssign?: boolean | Team$AssessmentAssignArgs<ExtArgs>
    AssessmentQuestionAssign?: boolean | Team$AssessmentQuestionAssignArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      Organisation: Prisma.$OrganisationPayload<ExtArgs>
      AssessmentAssign: Prisma.$AssessmentAssignPayload<ExtArgs>[]
      AssessmentQuestionAssign: Prisma.$AssessmentQuestionAssignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      logo: string | null
      organisationId: number
      password: string | null
      rememberToken: string | null
      isActive: boolean
      secretToken: string | null
      tfaToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organisation<T extends OrganisationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganisationDefaultArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AssessmentAssign<T extends Team$AssessmentAssignArgs<ExtArgs> = {}>(args?: Subset<T, Team$AssessmentAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "findMany"> | Null>
    AssessmentQuestionAssign<T extends Team$AssessmentQuestionAssignArgs<ExtArgs> = {}>(args?: Subset<T, Team$AssessmentQuestionAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
    readonly description: FieldRef<"Team", 'String'>
    readonly logo: FieldRef<"Team", 'String'>
    readonly organisationId: FieldRef<"Team", 'Int'>
    readonly password: FieldRef<"Team", 'String'>
    readonly rememberToken: FieldRef<"Team", 'String'>
    readonly isActive: FieldRef<"Team", 'Boolean'>
    readonly secretToken: FieldRef<"Team", 'String'>
    readonly tfaToken: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }

  /**
   * Team.AssessmentAssign
   */
  export type Team$AssessmentAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    where?: AssessmentAssignWhereInput
    orderBy?: AssessmentAssignOrderByWithRelationInput | AssessmentAssignOrderByWithRelationInput[]
    cursor?: AssessmentAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentAssignScalarFieldEnum | AssessmentAssignScalarFieldEnum[]
  }

  /**
   * Team.AssessmentQuestionAssign
   */
  export type Team$AssessmentQuestionAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    where?: AssessmentQuestionAssignWhereInput
    orderBy?: AssessmentQuestionAssignOrderByWithRelationInput | AssessmentQuestionAssignOrderByWithRelationInput[]
    cursor?: AssessmentQuestionAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentQuestionAssignScalarFieldEnum | AssessmentQuestionAssignScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberAvgAggregateOutputType = {
    id: number | null
    memberId: number | null
  }

  export type TeamMemberSumAggregateOutputType = {
    id: number | null
    memberId: number | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: number | null
    memberId: number | null
    Level: $Enums.TeamMemberLevel | null
    password: string | null
    rememberToken: string | null
    isActive: boolean | null
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: number | null
    memberId: number | null
    Level: $Enums.TeamMemberLevel | null
    password: string | null
    rememberToken: string | null
    isActive: boolean | null
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    memberId: number
    Level: number
    password: number
    rememberToken: number
    isActive: number
    secretToken: number
    tfaToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMemberAvgAggregateInputType = {
    id?: true
    memberId?: true
  }

  export type TeamMemberSumAggregateInputType = {
    id?: true
    memberId?: true
  }

  export type TeamMemberMinAggregateInputType = {
    id?: true
    memberId?: true
    Level?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    memberId?: true
    Level?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    memberId?: true
    Level?: true
    password?: true
    rememberToken?: true
    isActive?: true
    secretToken?: true
    tfaToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _avg?: TeamMemberAvgAggregateInputType
    _sum?: TeamMemberSumAggregateInputType
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: number
    memberId: number
    Level: $Enums.TeamMemberLevel
    password: string | null
    rememberToken: string | null
    isActive: boolean
    secretToken: string | null
    tfaToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    Level?: boolean
    password?: boolean
    rememberToken?: boolean
    isActive?: boolean
    secretToken?: boolean
    tfaToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Member?: boolean | UserDefaultArgs<ExtArgs>
    AssessmentAssign?: boolean | TeamMember$AssessmentAssignArgs<ExtArgs>
    AssessmentQuestionAssign?: boolean | TeamMember$AssessmentQuestionAssignArgs<ExtArgs>
    _count?: boolean | TeamMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>


  export type TeamMemberSelectScalar = {
    id?: boolean
    memberId?: boolean
    Level?: boolean
    password?: boolean
    rememberToken?: boolean
    isActive?: boolean
    secretToken?: boolean
    tfaToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member?: boolean | UserDefaultArgs<ExtArgs>
    AssessmentAssign?: boolean | TeamMember$AssessmentAssignArgs<ExtArgs>
    AssessmentQuestionAssign?: boolean | TeamMember$AssessmentQuestionAssignArgs<ExtArgs>
    _count?: boolean | TeamMemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      Member: Prisma.$UserPayload<ExtArgs>
      AssessmentAssign: Prisma.$AssessmentAssignPayload<ExtArgs>[]
      AssessmentQuestionAssign: Prisma.$AssessmentQuestionAssignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      memberId: number
      Level: $Enums.TeamMemberLevel
      password: string | null
      rememberToken: string | null
      isActive: boolean
      secretToken: string | null
      tfaToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Member<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    AssessmentAssign<T extends TeamMember$AssessmentAssignArgs<ExtArgs> = {}>(args?: Subset<T, TeamMember$AssessmentAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentAssignPayload<ExtArgs>, T, "findMany"> | Null>
    AssessmentQuestionAssign<T extends TeamMember$AssessmentQuestionAssignArgs<ExtArgs> = {}>(args?: Subset<T, TeamMember$AssessmentQuestionAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentQuestionAssignPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamMember model
   */ 
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'Int'>
    readonly memberId: FieldRef<"TeamMember", 'Int'>
    readonly Level: FieldRef<"TeamMember", 'TeamMemberLevel'>
    readonly password: FieldRef<"TeamMember", 'String'>
    readonly rememberToken: FieldRef<"TeamMember", 'String'>
    readonly isActive: FieldRef<"TeamMember", 'Boolean'>
    readonly secretToken: FieldRef<"TeamMember", 'String'>
    readonly tfaToken: FieldRef<"TeamMember", 'String'>
    readonly createdAt: FieldRef<"TeamMember", 'DateTime'>
    readonly updatedAt: FieldRef<"TeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
  }

  /**
   * TeamMember.AssessmentAssign
   */
  export type TeamMember$AssessmentAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentAssign
     */
    select?: AssessmentAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentAssignInclude<ExtArgs> | null
    where?: AssessmentAssignWhereInput
    orderBy?: AssessmentAssignOrderByWithRelationInput | AssessmentAssignOrderByWithRelationInput[]
    cursor?: AssessmentAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentAssignScalarFieldEnum | AssessmentAssignScalarFieldEnum[]
  }

  /**
   * TeamMember.AssessmentQuestionAssign
   */
  export type TeamMember$AssessmentQuestionAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentQuestionAssign
     */
    select?: AssessmentQuestionAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentQuestionAssignInclude<ExtArgs> | null
    where?: AssessmentQuestionAssignWhereInput
    orderBy?: AssessmentQuestionAssignOrderByWithRelationInput | AssessmentQuestionAssignOrderByWithRelationInput[]
    cursor?: AssessmentQuestionAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentQuestionAssignScalarFieldEnum | AssessmentQuestionAssignScalarFieldEnum[]
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    company: string | null
    password: string | null
    rememberToken: string | null
    disabled: boolean | null
    tfaSecret: string | null
    fpwToken: string | null
    qrCodeVisibility: boolean | null
    isDureation: boolean | null
    tfaStatus: boolean | null
    emailVerifiedAt: Date | null
    startDate: Date | null
    endDate: Date | null
    deletedAt: Date | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    company: string | null
    password: string | null
    rememberToken: string | null
    disabled: boolean | null
    tfaSecret: string | null
    fpwToken: string | null
    qrCodeVisibility: boolean | null
    isDureation: boolean | null
    tfaStatus: boolean | null
    emailVerifiedAt: Date | null
    startDate: Date | null
    endDate: Date | null
    deletedAt: Date | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    company: number
    password: number
    rememberToken: number
    disabled: number
    tfaSecret: number
    fpwToken: number
    qrCodeVisibility: number
    isDureation: number
    tfaStatus: number
    emailVerifiedAt: number
    startDate: number
    endDate: number
    deletedAt: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    password?: true
    rememberToken?: true
    disabled?: true
    tfaSecret?: true
    fpwToken?: true
    qrCodeVisibility?: true
    isDureation?: true
    tfaStatus?: true
    emailVerifiedAt?: true
    startDate?: true
    endDate?: true
    deletedAt?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    password?: true
    rememberToken?: true
    disabled?: true
    tfaSecret?: true
    fpwToken?: true
    qrCodeVisibility?: true
    isDureation?: true
    tfaStatus?: true
    emailVerifiedAt?: true
    startDate?: true
    endDate?: true
    deletedAt?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    password?: true
    rememberToken?: true
    disabled?: true
    tfaSecret?: true
    fpwToken?: true
    qrCodeVisibility?: true
    isDureation?: true
    tfaStatus?: true
    emailVerifiedAt?: true
    startDate?: true
    endDate?: true
    deletedAt?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    company: string | null
    password: string
    rememberToken: string | null
    disabled: boolean
    tfaSecret: string | null
    fpwToken: string | null
    qrCodeVisibility: boolean
    isDureation: boolean
    tfaStatus: boolean
    emailVerifiedAt: Date | null
    startDate: Date | null
    endDate: Date | null
    deletedAt: Date | null
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    password?: boolean
    rememberToken?: boolean
    disabled?: boolean
    tfaSecret?: boolean
    fpwToken?: boolean
    qrCodeVisibility?: boolean
    isDureation?: boolean
    tfaStatus?: boolean
    emailVerifiedAt?: boolean
    startDate?: boolean
    endDate?: boolean
    deletedAt?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Organisation?: boolean | User$OrganisationArgs<ExtArgs>
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    TeamMember?: boolean | User$TeamMemberArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    password?: boolean
    rememberToken?: boolean
    disabled?: boolean
    tfaSecret?: boolean
    fpwToken?: boolean
    qrCodeVisibility?: boolean
    isDureation?: boolean
    tfaStatus?: boolean
    emailVerifiedAt?: boolean
    startDate?: boolean
    endDate?: boolean
    deletedAt?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organisation?: boolean | User$OrganisationArgs<ExtArgs>
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    TeamMember?: boolean | User$TeamMemberArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Organisation: Prisma.$OrganisationPayload<ExtArgs> | null
      UserRole: Prisma.$UserRolePayload<ExtArgs>[]
      TeamMember: Prisma.$TeamMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      company: string | null
      password: string
      rememberToken: string | null
      disabled: boolean
      tfaSecret: string | null
      fpwToken: string | null
      qrCodeVisibility: boolean
      isDureation: boolean
      tfaStatus: boolean
      emailVerifiedAt: Date | null
      startDate: Date | null
      endDate: Date | null
      deletedAt: Date | null
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organisation<T extends User$OrganisationArgs<ExtArgs> = {}>(args?: Subset<T, User$OrganisationArgs<ExtArgs>>): Prisma__OrganisationClient<$Result.GetResult<Prisma.$OrganisationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    UserRole<T extends User$UserRoleArgs<ExtArgs> = {}>(args?: Subset<T, User$UserRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany"> | Null>
    TeamMember<T extends User$TeamMemberArgs<ExtArgs> = {}>(args?: Subset<T, User$TeamMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly company: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly rememberToken: FieldRef<"User", 'String'>
    readonly disabled: FieldRef<"User", 'Boolean'>
    readonly tfaSecret: FieldRef<"User", 'String'>
    readonly fpwToken: FieldRef<"User", 'String'>
    readonly qrCodeVisibility: FieldRef<"User", 'Boolean'>
    readonly isDureation: FieldRef<"User", 'Boolean'>
    readonly tfaStatus: FieldRef<"User", 'Boolean'>
    readonly emailVerifiedAt: FieldRef<"User", 'DateTime'>
    readonly startDate: FieldRef<"User", 'DateTime'>
    readonly endDate: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Organisation
   */
  export type User$OrganisationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organisation
     */
    select?: OrganisationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganisationInclude<ExtArgs> | null
    where?: OrganisationWhereInput
  }

  /**
   * User.UserRole
   */
  export type User$UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.TeamMember
   */
  export type User$TeamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    userId: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type UserRoleSumAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type UserRoleMinAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: number
    userId: number
    roleId: number
    createdAt: Date
    updatedAt: Date
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>


  export type UserRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      roleId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'Int'>
    readonly userId: FieldRef<"UserRole", 'Int'>
    readonly roleId: FieldRef<"UserRole", 'Int'>
    readonly createdAt: FieldRef<"UserRole", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AssessmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    logo: 'logo',
    organisationId: 'organisationId',
    password: 'password',
    rememberToken: 'rememberToken',
    isActive: 'isActive',
    secretToken: 'secretToken',
    tfaToken: 'tfaToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssessmentScalarFieldEnum = (typeof AssessmentScalarFieldEnum)[keyof typeof AssessmentScalarFieldEnum]


  export const AssessmentAssignScalarFieldEnum: {
    id: 'id',
    assessmentId: 'assessmentId',
    teamId: 'teamId',
    memberId: 'memberId',
    password: 'password',
    rememberToken: 'rememberToken',
    isActive: 'isActive',
    secretToken: 'secretToken',
    tfaToken: 'tfaToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssessmentAssignScalarFieldEnum = (typeof AssessmentAssignScalarFieldEnum)[keyof typeof AssessmentAssignScalarFieldEnum]


  export const AssessmentQuestionScalarFieldEnum: {
    id: 'id',
    assessmentId: 'assessmentId',
    questionId_: 'questionId_',
    questionId: 'questionId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssessmentQuestionScalarFieldEnum = (typeof AssessmentQuestionScalarFieldEnum)[keyof typeof AssessmentQuestionScalarFieldEnum]


  export const AssessmentQuestionAnswerScalarFieldEnum: {
    id: 'id',
    assessmentQuestionAssignId: 'assessmentQuestionAssignId',
    questionAnswerId: 'questionAnswerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssessmentQuestionAnswerScalarFieldEnum = (typeof AssessmentQuestionAnswerScalarFieldEnum)[keyof typeof AssessmentQuestionAnswerScalarFieldEnum]


  export const AssessmentQuestionAssignScalarFieldEnum: {
    id: 'id',
    assessmentId: 'assessmentId',
    teamId: 'teamId',
    memberId: 'memberId',
    assessmentQuestionId: 'assessmentQuestionId',
    assessmentAssignId: 'assessmentAssignId',
    password: 'password',
    rememberToken: 'rememberToken',
    isActive: 'isActive',
    secretToken: 'secretToken',
    tfaToken: 'tfaToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssessmentQuestionAssignScalarFieldEnum = (typeof AssessmentQuestionAssignScalarFieldEnum)[keyof typeof AssessmentQuestionAssignScalarFieldEnum]


  export const OrganisationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganisationScalarFieldEnum = (typeof OrganisationScalarFieldEnum)[keyof typeof OrganisationScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    questionType: 'questionType',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AuestionAnswerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    questionId: 'questionId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuestionAnswerScalarFieldEnum = (typeof AuestionAnswerScalarFieldEnum)[keyof typeof AuestionAnswerScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    logo: 'logo',
    organisationId: 'organisationId',
    password: 'password',
    rememberToken: 'rememberToken',
    isActive: 'isActive',
    secretToken: 'secretToken',
    tfaToken: 'tfaToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    Level: 'Level',
    password: 'password',
    rememberToken: 'rememberToken',
    isActive: 'isActive',
    secretToken: 'secretToken',
    tfaToken: 'tfaToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    company: 'company',
    password: 'password',
    rememberToken: 'rememberToken',
    disabled: 'disabled',
    tfaSecret: 'tfaSecret',
    fpwToken: 'fpwToken',
    qrCodeVisibility: 'qrCodeVisibility',
    isDureation: 'isDureation',
    tfaStatus: 'tfaStatus',
    emailVerifiedAt: 'emailVerifiedAt',
    startDate: 'startDate',
    endDate: 'endDate',
    deletedAt: 'deletedAt',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'TeamMemberLevel'
   */
  export type EnumTeamMemberLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamMemberLevel'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AssessmentWhereInput = {
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    id?: IntFilter<"Assessment"> | number
    name?: StringFilter<"Assessment"> | string
    description?: StringNullableFilter<"Assessment"> | string | null
    logo?: StringNullableFilter<"Assessment"> | string | null
    organisationId?: IntFilter<"Assessment"> | number
    password?: StringNullableFilter<"Assessment"> | string | null
    rememberToken?: StringNullableFilter<"Assessment"> | string | null
    isActive?: BoolFilter<"Assessment"> | boolean
    secretToken?: StringNullableFilter<"Assessment"> | string | null
    tfaToken?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
    Organisation?: XOR<OrganisationRelationFilter, OrganisationWhereInput>
    AssessmentAssign?: AssessmentAssignListRelationFilter
    AssessmentQuestionAssign?: AssessmentQuestionAssignListRelationFilter
    AssessmentQuestion?: AssessmentQuestionListRelationFilter
  }

  export type AssessmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    organisationId?: SortOrder
    password?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    secretToken?: SortOrderInput | SortOrder
    tfaToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Organisation?: OrganisationOrderByWithRelationInput
    AssessmentAssign?: AssessmentAssignOrderByRelationAggregateInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignOrderByRelationAggregateInput
    AssessmentQuestion?: AssessmentQuestionOrderByRelationAggregateInput
  }

  export type AssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssessmentWhereInput | AssessmentWhereInput[]
    OR?: AssessmentWhereInput[]
    NOT?: AssessmentWhereInput | AssessmentWhereInput[]
    name?: StringFilter<"Assessment"> | string
    description?: StringNullableFilter<"Assessment"> | string | null
    logo?: StringNullableFilter<"Assessment"> | string | null
    organisationId?: IntFilter<"Assessment"> | number
    password?: StringNullableFilter<"Assessment"> | string | null
    rememberToken?: StringNullableFilter<"Assessment"> | string | null
    isActive?: BoolFilter<"Assessment"> | boolean
    secretToken?: StringNullableFilter<"Assessment"> | string | null
    tfaToken?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
    Organisation?: XOR<OrganisationRelationFilter, OrganisationWhereInput>
    AssessmentAssign?: AssessmentAssignListRelationFilter
    AssessmentQuestionAssign?: AssessmentQuestionAssignListRelationFilter
    AssessmentQuestion?: AssessmentQuestionListRelationFilter
  }, "id" | "id">

  export type AssessmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    organisationId?: SortOrder
    password?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    secretToken?: SortOrderInput | SortOrder
    tfaToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssessmentCountOrderByAggregateInput
    _avg?: AssessmentAvgOrderByAggregateInput
    _max?: AssessmentMaxOrderByAggregateInput
    _min?: AssessmentMinOrderByAggregateInput
    _sum?: AssessmentSumOrderByAggregateInput
  }

  export type AssessmentScalarWhereWithAggregatesInput = {
    AND?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    OR?: AssessmentScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScalarWhereWithAggregatesInput | AssessmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Assessment"> | number
    name?: StringWithAggregatesFilter<"Assessment"> | string
    description?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    organisationId?: IntWithAggregatesFilter<"Assessment"> | number
    password?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    rememberToken?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    isActive?: BoolWithAggregatesFilter<"Assessment"> | boolean
    secretToken?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    tfaToken?: StringNullableWithAggregatesFilter<"Assessment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assessment"> | Date | string
  }

  export type AssessmentAssignWhereInput = {
    AND?: AssessmentAssignWhereInput | AssessmentAssignWhereInput[]
    OR?: AssessmentAssignWhereInput[]
    NOT?: AssessmentAssignWhereInput | AssessmentAssignWhereInput[]
    id?: IntFilter<"AssessmentAssign"> | number
    assessmentId?: IntFilter<"AssessmentAssign"> | number
    teamId?: IntFilter<"AssessmentAssign"> | number
    memberId?: IntFilter<"AssessmentAssign"> | number
    password?: StringNullableFilter<"AssessmentAssign"> | string | null
    rememberToken?: StringNullableFilter<"AssessmentAssign"> | string | null
    isActive?: BoolFilter<"AssessmentAssign"> | boolean
    secretToken?: StringNullableFilter<"AssessmentAssign"> | string | null
    tfaToken?: StringNullableFilter<"AssessmentAssign"> | string | null
    createdAt?: DateTimeFilter<"AssessmentAssign"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentAssign"> | Date | string
    Assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
    Team?: XOR<TeamRelationFilter, TeamWhereInput>
    Member?: XOR<TeamMemberRelationFilter, TeamMemberWhereInput>
    AssessmentQuestionAssign?: AssessmentQuestionAssignListRelationFilter
  }

  export type AssessmentAssignOrderByWithRelationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    password?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    secretToken?: SortOrderInput | SortOrder
    tfaToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Assessment?: AssessmentOrderByWithRelationInput
    Team?: TeamOrderByWithRelationInput
    Member?: TeamMemberOrderByWithRelationInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignOrderByRelationAggregateInput
  }

  export type AssessmentAssignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssessmentAssignWhereInput | AssessmentAssignWhereInput[]
    OR?: AssessmentAssignWhereInput[]
    NOT?: AssessmentAssignWhereInput | AssessmentAssignWhereInput[]
    assessmentId?: IntFilter<"AssessmentAssign"> | number
    teamId?: IntFilter<"AssessmentAssign"> | number
    memberId?: IntFilter<"AssessmentAssign"> | number
    password?: StringNullableFilter<"AssessmentAssign"> | string | null
    rememberToken?: StringNullableFilter<"AssessmentAssign"> | string | null
    isActive?: BoolFilter<"AssessmentAssign"> | boolean
    secretToken?: StringNullableFilter<"AssessmentAssign"> | string | null
    tfaToken?: StringNullableFilter<"AssessmentAssign"> | string | null
    createdAt?: DateTimeFilter<"AssessmentAssign"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentAssign"> | Date | string
    Assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
    Team?: XOR<TeamRelationFilter, TeamWhereInput>
    Member?: XOR<TeamMemberRelationFilter, TeamMemberWhereInput>
    AssessmentQuestionAssign?: AssessmentQuestionAssignListRelationFilter
  }, "id" | "id">

  export type AssessmentAssignOrderByWithAggregationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    password?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    secretToken?: SortOrderInput | SortOrder
    tfaToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssessmentAssignCountOrderByAggregateInput
    _avg?: AssessmentAssignAvgOrderByAggregateInput
    _max?: AssessmentAssignMaxOrderByAggregateInput
    _min?: AssessmentAssignMinOrderByAggregateInput
    _sum?: AssessmentAssignSumOrderByAggregateInput
  }

  export type AssessmentAssignScalarWhereWithAggregatesInput = {
    AND?: AssessmentAssignScalarWhereWithAggregatesInput | AssessmentAssignScalarWhereWithAggregatesInput[]
    OR?: AssessmentAssignScalarWhereWithAggregatesInput[]
    NOT?: AssessmentAssignScalarWhereWithAggregatesInput | AssessmentAssignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssessmentAssign"> | number
    assessmentId?: IntWithAggregatesFilter<"AssessmentAssign"> | number
    teamId?: IntWithAggregatesFilter<"AssessmentAssign"> | number
    memberId?: IntWithAggregatesFilter<"AssessmentAssign"> | number
    password?: StringNullableWithAggregatesFilter<"AssessmentAssign"> | string | null
    rememberToken?: StringNullableWithAggregatesFilter<"AssessmentAssign"> | string | null
    isActive?: BoolWithAggregatesFilter<"AssessmentAssign"> | boolean
    secretToken?: StringNullableWithAggregatesFilter<"AssessmentAssign"> | string | null
    tfaToken?: StringNullableWithAggregatesFilter<"AssessmentAssign"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AssessmentAssign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssessmentAssign"> | Date | string
  }

  export type AssessmentQuestionWhereInput = {
    AND?: AssessmentQuestionWhereInput | AssessmentQuestionWhereInput[]
    OR?: AssessmentQuestionWhereInput[]
    NOT?: AssessmentQuestionWhereInput | AssessmentQuestionWhereInput[]
    id?: IntFilter<"AssessmentQuestion"> | number
    assessmentId?: IntFilter<"AssessmentQuestion"> | number
    questionId_?: IntFilter<"AssessmentQuestion"> | number
    questionId?: IntFilter<"AssessmentQuestion"> | number
    isActive?: BoolFilter<"AssessmentQuestion"> | boolean
    createdAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
    Assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    AssessmentQuestionAssign?: AssessmentQuestionAssignListRelationFilter
  }

  export type AssessmentQuestionOrderByWithRelationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId_?: SortOrder
    questionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Assessment?: AssessmentOrderByWithRelationInput
    Question?: QuestionOrderByWithRelationInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignOrderByRelationAggregateInput
  }

  export type AssessmentQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssessmentQuestionWhereInput | AssessmentQuestionWhereInput[]
    OR?: AssessmentQuestionWhereInput[]
    NOT?: AssessmentQuestionWhereInput | AssessmentQuestionWhereInput[]
    assessmentId?: IntFilter<"AssessmentQuestion"> | number
    questionId_?: IntFilter<"AssessmentQuestion"> | number
    questionId?: IntFilter<"AssessmentQuestion"> | number
    isActive?: BoolFilter<"AssessmentQuestion"> | boolean
    createdAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
    Assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    AssessmentQuestionAssign?: AssessmentQuestionAssignListRelationFilter
  }, "id" | "id">

  export type AssessmentQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId_?: SortOrder
    questionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssessmentQuestionCountOrderByAggregateInput
    _avg?: AssessmentQuestionAvgOrderByAggregateInput
    _max?: AssessmentQuestionMaxOrderByAggregateInput
    _min?: AssessmentQuestionMinOrderByAggregateInput
    _sum?: AssessmentQuestionSumOrderByAggregateInput
  }

  export type AssessmentQuestionScalarWhereWithAggregatesInput = {
    AND?: AssessmentQuestionScalarWhereWithAggregatesInput | AssessmentQuestionScalarWhereWithAggregatesInput[]
    OR?: AssessmentQuestionScalarWhereWithAggregatesInput[]
    NOT?: AssessmentQuestionScalarWhereWithAggregatesInput | AssessmentQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssessmentQuestion"> | number
    assessmentId?: IntWithAggregatesFilter<"AssessmentQuestion"> | number
    questionId_?: IntWithAggregatesFilter<"AssessmentQuestion"> | number
    questionId?: IntWithAggregatesFilter<"AssessmentQuestion"> | number
    isActive?: BoolWithAggregatesFilter<"AssessmentQuestion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AssessmentQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssessmentQuestion"> | Date | string
  }

  export type AssessmentQuestionAnswerWhereInput = {
    AND?: AssessmentQuestionAnswerWhereInput | AssessmentQuestionAnswerWhereInput[]
    OR?: AssessmentQuestionAnswerWhereInput[]
    NOT?: AssessmentQuestionAnswerWhereInput | AssessmentQuestionAnswerWhereInput[]
    id?: IntFilter<"AssessmentQuestionAnswer"> | number
    assessmentQuestionAssignId?: IntFilter<"AssessmentQuestionAnswer"> | number
    questionAnswerId?: IntFilter<"AssessmentQuestionAnswer"> | number
    createdAt?: DateTimeFilter<"AssessmentQuestionAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestionAnswer"> | Date | string
    AssessmentQuestionAssign?: XOR<AssessmentQuestionAssignRelationFilter, AssessmentQuestionAssignWhereInput>
    AuestionAnswer?: XOR<AuestionAnswerRelationFilter, AuestionAnswerWhereInput>
  }

  export type AssessmentQuestionAnswerOrderByWithRelationInput = {
    id?: SortOrder
    assessmentQuestionAssignId?: SortOrder
    questionAnswerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    AssessmentQuestionAssign?: AssessmentQuestionAssignOrderByWithRelationInput
    AuestionAnswer?: AuestionAnswerOrderByWithRelationInput
  }

  export type AssessmentQuestionAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssessmentQuestionAnswerWhereInput | AssessmentQuestionAnswerWhereInput[]
    OR?: AssessmentQuestionAnswerWhereInput[]
    NOT?: AssessmentQuestionAnswerWhereInput | AssessmentQuestionAnswerWhereInput[]
    assessmentQuestionAssignId?: IntFilter<"AssessmentQuestionAnswer"> | number
    questionAnswerId?: IntFilter<"AssessmentQuestionAnswer"> | number
    createdAt?: DateTimeFilter<"AssessmentQuestionAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestionAnswer"> | Date | string
    AssessmentQuestionAssign?: XOR<AssessmentQuestionAssignRelationFilter, AssessmentQuestionAssignWhereInput>
    AuestionAnswer?: XOR<AuestionAnswerRelationFilter, AuestionAnswerWhereInput>
  }, "id" | "id">

  export type AssessmentQuestionAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    assessmentQuestionAssignId?: SortOrder
    questionAnswerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssessmentQuestionAnswerCountOrderByAggregateInput
    _avg?: AssessmentQuestionAnswerAvgOrderByAggregateInput
    _max?: AssessmentQuestionAnswerMaxOrderByAggregateInput
    _min?: AssessmentQuestionAnswerMinOrderByAggregateInput
    _sum?: AssessmentQuestionAnswerSumOrderByAggregateInput
  }

  export type AssessmentQuestionAnswerScalarWhereWithAggregatesInput = {
    AND?: AssessmentQuestionAnswerScalarWhereWithAggregatesInput | AssessmentQuestionAnswerScalarWhereWithAggregatesInput[]
    OR?: AssessmentQuestionAnswerScalarWhereWithAggregatesInput[]
    NOT?: AssessmentQuestionAnswerScalarWhereWithAggregatesInput | AssessmentQuestionAnswerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssessmentQuestionAnswer"> | number
    assessmentQuestionAssignId?: IntWithAggregatesFilter<"AssessmentQuestionAnswer"> | number
    questionAnswerId?: IntWithAggregatesFilter<"AssessmentQuestionAnswer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AssessmentQuestionAnswer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssessmentQuestionAnswer"> | Date | string
  }

  export type AssessmentQuestionAssignWhereInput = {
    AND?: AssessmentQuestionAssignWhereInput | AssessmentQuestionAssignWhereInput[]
    OR?: AssessmentQuestionAssignWhereInput[]
    NOT?: AssessmentQuestionAssignWhereInput | AssessmentQuestionAssignWhereInput[]
    id?: IntFilter<"AssessmentQuestionAssign"> | number
    assessmentId?: IntFilter<"AssessmentQuestionAssign"> | number
    teamId?: IntFilter<"AssessmentQuestionAssign"> | number
    memberId?: IntFilter<"AssessmentQuestionAssign"> | number
    assessmentQuestionId?: IntFilter<"AssessmentQuestionAssign"> | number
    assessmentAssignId?: IntFilter<"AssessmentQuestionAssign"> | number
    password?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    rememberToken?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    isActive?: BoolFilter<"AssessmentQuestionAssign"> | boolean
    secretToken?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    tfaToken?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    createdAt?: DateTimeFilter<"AssessmentQuestionAssign"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestionAssign"> | Date | string
    Assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
    Team?: XOR<TeamRelationFilter, TeamWhereInput>
    Member?: XOR<TeamMemberRelationFilter, TeamMemberWhereInput>
    AssessmentQuestion?: XOR<AssessmentQuestionRelationFilter, AssessmentQuestionWhereInput>
    AssessmentAssign?: XOR<AssessmentAssignRelationFilter, AssessmentAssignWhereInput>
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerListRelationFilter
  }

  export type AssessmentQuestionAssignOrderByWithRelationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    assessmentQuestionId?: SortOrder
    assessmentAssignId?: SortOrder
    password?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    secretToken?: SortOrderInput | SortOrder
    tfaToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Assessment?: AssessmentOrderByWithRelationInput
    Team?: TeamOrderByWithRelationInput
    Member?: TeamMemberOrderByWithRelationInput
    AssessmentQuestion?: AssessmentQuestionOrderByWithRelationInput
    AssessmentAssign?: AssessmentAssignOrderByWithRelationInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerOrderByRelationAggregateInput
  }

  export type AssessmentQuestionAssignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssessmentQuestionAssignWhereInput | AssessmentQuestionAssignWhereInput[]
    OR?: AssessmentQuestionAssignWhereInput[]
    NOT?: AssessmentQuestionAssignWhereInput | AssessmentQuestionAssignWhereInput[]
    assessmentId?: IntFilter<"AssessmentQuestionAssign"> | number
    teamId?: IntFilter<"AssessmentQuestionAssign"> | number
    memberId?: IntFilter<"AssessmentQuestionAssign"> | number
    assessmentQuestionId?: IntFilter<"AssessmentQuestionAssign"> | number
    assessmentAssignId?: IntFilter<"AssessmentQuestionAssign"> | number
    password?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    rememberToken?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    isActive?: BoolFilter<"AssessmentQuestionAssign"> | boolean
    secretToken?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    tfaToken?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    createdAt?: DateTimeFilter<"AssessmentQuestionAssign"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestionAssign"> | Date | string
    Assessment?: XOR<AssessmentRelationFilter, AssessmentWhereInput>
    Team?: XOR<TeamRelationFilter, TeamWhereInput>
    Member?: XOR<TeamMemberRelationFilter, TeamMemberWhereInput>
    AssessmentQuestion?: XOR<AssessmentQuestionRelationFilter, AssessmentQuestionWhereInput>
    AssessmentAssign?: XOR<AssessmentAssignRelationFilter, AssessmentAssignWhereInput>
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerListRelationFilter
  }, "id" | "id">

  export type AssessmentQuestionAssignOrderByWithAggregationInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    assessmentQuestionId?: SortOrder
    assessmentAssignId?: SortOrder
    password?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    secretToken?: SortOrderInput | SortOrder
    tfaToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssessmentQuestionAssignCountOrderByAggregateInput
    _avg?: AssessmentQuestionAssignAvgOrderByAggregateInput
    _max?: AssessmentQuestionAssignMaxOrderByAggregateInput
    _min?: AssessmentQuestionAssignMinOrderByAggregateInput
    _sum?: AssessmentQuestionAssignSumOrderByAggregateInput
  }

  export type AssessmentQuestionAssignScalarWhereWithAggregatesInput = {
    AND?: AssessmentQuestionAssignScalarWhereWithAggregatesInput | AssessmentQuestionAssignScalarWhereWithAggregatesInput[]
    OR?: AssessmentQuestionAssignScalarWhereWithAggregatesInput[]
    NOT?: AssessmentQuestionAssignScalarWhereWithAggregatesInput | AssessmentQuestionAssignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssessmentQuestionAssign"> | number
    assessmentId?: IntWithAggregatesFilter<"AssessmentQuestionAssign"> | number
    teamId?: IntWithAggregatesFilter<"AssessmentQuestionAssign"> | number
    memberId?: IntWithAggregatesFilter<"AssessmentQuestionAssign"> | number
    assessmentQuestionId?: IntWithAggregatesFilter<"AssessmentQuestionAssign"> | number
    assessmentAssignId?: IntWithAggregatesFilter<"AssessmentQuestionAssign"> | number
    password?: StringNullableWithAggregatesFilter<"AssessmentQuestionAssign"> | string | null
    rememberToken?: StringNullableWithAggregatesFilter<"AssessmentQuestionAssign"> | string | null
    isActive?: BoolWithAggregatesFilter<"AssessmentQuestionAssign"> | boolean
    secretToken?: StringNullableWithAggregatesFilter<"AssessmentQuestionAssign"> | string | null
    tfaToken?: StringNullableWithAggregatesFilter<"AssessmentQuestionAssign"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AssessmentQuestionAssign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssessmentQuestionAssign"> | Date | string
  }

  export type OrganisationWhereInput = {
    AND?: OrganisationWhereInput | OrganisationWhereInput[]
    OR?: OrganisationWhereInput[]
    NOT?: OrganisationWhereInput | OrganisationWhereInput[]
    id?: IntFilter<"Organisation"> | number
    name?: StringFilter<"Organisation"> | string
    description?: StringFilter<"Organisation"> | string
    isActive?: BoolFilter<"Organisation"> | boolean
    ownerId?: IntFilter<"Organisation"> | number
    createdAt?: DateTimeFilter<"Organisation"> | Date | string
    updatedAt?: DateTimeFilter<"Organisation"> | Date | string
    Owner?: XOR<UserRelationFilter, UserWhereInput>
    Assessment?: AssessmentListRelationFilter
    Team?: TeamListRelationFilter
  }

  export type OrganisationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Owner?: UserOrderByWithRelationInput
    Assessment?: AssessmentOrderByRelationAggregateInput
    Team?: TeamOrderByRelationAggregateInput
  }

  export type OrganisationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    description?: string
    ownerId?: number
    AND?: OrganisationWhereInput | OrganisationWhereInput[]
    OR?: OrganisationWhereInput[]
    NOT?: OrganisationWhereInput | OrganisationWhereInput[]
    name?: StringFilter<"Organisation"> | string
    isActive?: BoolFilter<"Organisation"> | boolean
    createdAt?: DateTimeFilter<"Organisation"> | Date | string
    updatedAt?: DateTimeFilter<"Organisation"> | Date | string
    Owner?: XOR<UserRelationFilter, UserWhereInput>
    Assessment?: AssessmentListRelationFilter
    Team?: TeamListRelationFilter
  }, "id" | "id" | "description" | "ownerId">

  export type OrganisationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganisationCountOrderByAggregateInput
    _avg?: OrganisationAvgOrderByAggregateInput
    _max?: OrganisationMaxOrderByAggregateInput
    _min?: OrganisationMinOrderByAggregateInput
    _sum?: OrganisationSumOrderByAggregateInput
  }

  export type OrganisationScalarWhereWithAggregatesInput = {
    AND?: OrganisationScalarWhereWithAggregatesInput | OrganisationScalarWhereWithAggregatesInput[]
    OR?: OrganisationScalarWhereWithAggregatesInput[]
    NOT?: OrganisationScalarWhereWithAggregatesInput | OrganisationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organisation"> | number
    name?: StringWithAggregatesFilter<"Organisation"> | string
    description?: StringWithAggregatesFilter<"Organisation"> | string
    isActive?: BoolWithAggregatesFilter<"Organisation"> | boolean
    ownerId?: IntWithAggregatesFilter<"Organisation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Organisation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organisation"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    name?: StringFilter<"Question"> | string
    description?: StringNullableFilter<"Question"> | string | null
    questionType?: EnumQuestionTypeNullableFilter<"Question"> | $Enums.QuestionType | null
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    AssessmentQuestion?: AssessmentQuestionListRelationFilter
    AuestionAnswer?: AuestionAnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    questionType?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    AssessmentQuestion?: AssessmentQuestionOrderByRelationAggregateInput
    AuestionAnswer?: AuestionAnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    name?: StringFilter<"Question"> | string
    description?: StringNullableFilter<"Question"> | string | null
    questionType?: EnumQuestionTypeNullableFilter<"Question"> | $Enums.QuestionType | null
    isActive?: BoolFilter<"Question"> | boolean
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    AssessmentQuestion?: AssessmentQuestionListRelationFilter
    AuestionAnswer?: AuestionAnswerListRelationFilter
  }, "id" | "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    questionType?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    name?: StringWithAggregatesFilter<"Question"> | string
    description?: StringNullableWithAggregatesFilter<"Question"> | string | null
    questionType?: EnumQuestionTypeNullableWithAggregatesFilter<"Question"> | $Enums.QuestionType | null
    isActive?: BoolWithAggregatesFilter<"Question"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type AuestionAnswerWhereInput = {
    AND?: AuestionAnswerWhereInput | AuestionAnswerWhereInput[]
    OR?: AuestionAnswerWhereInput[]
    NOT?: AuestionAnswerWhereInput | AuestionAnswerWhereInput[]
    id?: IntFilter<"AuestionAnswer"> | number
    name?: StringFilter<"AuestionAnswer"> | string
    description?: StringNullableFilter<"AuestionAnswer"> | string | null
    questionId?: IntFilter<"AuestionAnswer"> | number
    isActive?: BoolFilter<"AuestionAnswer"> | boolean
    createdAt?: DateTimeFilter<"AuestionAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"AuestionAnswer"> | Date | string
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerListRelationFilter
  }

  export type AuestionAnswerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    questionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Question?: QuestionOrderByWithRelationInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerOrderByRelationAggregateInput
  }

  export type AuestionAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuestionAnswerWhereInput | AuestionAnswerWhereInput[]
    OR?: AuestionAnswerWhereInput[]
    NOT?: AuestionAnswerWhereInput | AuestionAnswerWhereInput[]
    name?: StringFilter<"AuestionAnswer"> | string
    description?: StringNullableFilter<"AuestionAnswer"> | string | null
    questionId?: IntFilter<"AuestionAnswer"> | number
    isActive?: BoolFilter<"AuestionAnswer"> | boolean
    createdAt?: DateTimeFilter<"AuestionAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"AuestionAnswer"> | Date | string
    Question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerListRelationFilter
  }, "id" | "id">

  export type AuestionAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    questionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuestionAnswerCountOrderByAggregateInput
    _avg?: AuestionAnswerAvgOrderByAggregateInput
    _max?: AuestionAnswerMaxOrderByAggregateInput
    _min?: AuestionAnswerMinOrderByAggregateInput
    _sum?: AuestionAnswerSumOrderByAggregateInput
  }

  export type AuestionAnswerScalarWhereWithAggregatesInput = {
    AND?: AuestionAnswerScalarWhereWithAggregatesInput | AuestionAnswerScalarWhereWithAggregatesInput[]
    OR?: AuestionAnswerScalarWhereWithAggregatesInput[]
    NOT?: AuestionAnswerScalarWhereWithAggregatesInput | AuestionAnswerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuestionAnswer"> | number
    name?: StringWithAggregatesFilter<"AuestionAnswer"> | string
    description?: StringNullableWithAggregatesFilter<"AuestionAnswer"> | string | null
    questionId?: IntWithAggregatesFilter<"AuestionAnswer"> | number
    isActive?: BoolWithAggregatesFilter<"AuestionAnswer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AuestionAnswer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuestionAnswer"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    description?: StringFilter<"Role"> | string
    isActive?: BoolFilter<"Role"> | boolean
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    UserRole?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserRole?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    description?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    isActive?: BoolFilter<"Role"> | boolean
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    UserRole?: UserRoleListRelationFilter
  }, "id" | "id" | "description">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringWithAggregatesFilter<"Role"> | string
    isActive?: BoolWithAggregatesFilter<"Role"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    logo?: StringNullableFilter<"Team"> | string | null
    organisationId?: IntFilter<"Team"> | number
    password?: StringNullableFilter<"Team"> | string | null
    rememberToken?: StringNullableFilter<"Team"> | string | null
    isActive?: BoolFilter<"Team"> | boolean
    secretToken?: StringNullableFilter<"Team"> | string | null
    tfaToken?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    Organisation?: XOR<OrganisationRelationFilter, OrganisationWhereInput>
    AssessmentAssign?: AssessmentAssignListRelationFilter
    AssessmentQuestionAssign?: AssessmentQuestionAssignListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    organisationId?: SortOrder
    password?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    secretToken?: SortOrderInput | SortOrder
    tfaToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Organisation?: OrganisationOrderByWithRelationInput
    AssessmentAssign?: AssessmentAssignOrderByRelationAggregateInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    logo?: StringNullableFilter<"Team"> | string | null
    organisationId?: IntFilter<"Team"> | number
    password?: StringNullableFilter<"Team"> | string | null
    rememberToken?: StringNullableFilter<"Team"> | string | null
    isActive?: BoolFilter<"Team"> | boolean
    secretToken?: StringNullableFilter<"Team"> | string | null
    tfaToken?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    Organisation?: XOR<OrganisationRelationFilter, OrganisationWhereInput>
    AssessmentAssign?: AssessmentAssignListRelationFilter
    AssessmentQuestionAssign?: AssessmentQuestionAssignListRelationFilter
  }, "id" | "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    organisationId?: SortOrder
    password?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    secretToken?: SortOrderInput | SortOrder
    tfaToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    name?: StringWithAggregatesFilter<"Team"> | string
    description?: StringNullableWithAggregatesFilter<"Team"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Team"> | string | null
    organisationId?: IntWithAggregatesFilter<"Team"> | number
    password?: StringNullableWithAggregatesFilter<"Team"> | string | null
    rememberToken?: StringNullableWithAggregatesFilter<"Team"> | string | null
    isActive?: BoolWithAggregatesFilter<"Team"> | boolean
    secretToken?: StringNullableWithAggregatesFilter<"Team"> | string | null
    tfaToken?: StringNullableWithAggregatesFilter<"Team"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: IntFilter<"TeamMember"> | number
    memberId?: IntFilter<"TeamMember"> | number
    Level?: EnumTeamMemberLevelFilter<"TeamMember"> | $Enums.TeamMemberLevel
    password?: StringNullableFilter<"TeamMember"> | string | null
    rememberToken?: StringNullableFilter<"TeamMember"> | string | null
    isActive?: BoolFilter<"TeamMember"> | boolean
    secretToken?: StringNullableFilter<"TeamMember"> | string | null
    tfaToken?: StringNullableFilter<"TeamMember"> | string | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
    Member?: XOR<UserRelationFilter, UserWhereInput>
    AssessmentAssign?: AssessmentAssignListRelationFilter
    AssessmentQuestionAssign?: AssessmentQuestionAssignListRelationFilter
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    Level?: SortOrder
    password?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    secretToken?: SortOrderInput | SortOrder
    tfaToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Member?: UserOrderByWithRelationInput
    AssessmentAssign?: AssessmentAssignOrderByRelationAggregateInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignOrderByRelationAggregateInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    memberId?: IntFilter<"TeamMember"> | number
    Level?: EnumTeamMemberLevelFilter<"TeamMember"> | $Enums.TeamMemberLevel
    password?: StringNullableFilter<"TeamMember"> | string | null
    rememberToken?: StringNullableFilter<"TeamMember"> | string | null
    isActive?: BoolFilter<"TeamMember"> | boolean
    secretToken?: StringNullableFilter<"TeamMember"> | string | null
    tfaToken?: StringNullableFilter<"TeamMember"> | string | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
    Member?: XOR<UserRelationFilter, UserWhereInput>
    AssessmentAssign?: AssessmentAssignListRelationFilter
    AssessmentQuestionAssign?: AssessmentQuestionAssignListRelationFilter
  }, "id" | "id">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    Level?: SortOrder
    password?: SortOrderInput | SortOrder
    rememberToken?: SortOrderInput | SortOrder
    isActive?: SortOrder
    secretToken?: SortOrderInput | SortOrder
    tfaToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _avg?: TeamMemberAvgOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
    _sum?: TeamMemberSumOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamMember"> | number
    memberId?: IntWithAggregatesFilter<"TeamMember"> | number
    Level?: EnumTeamMemberLevelWithAggregatesFilter<"TeamMember"> | $Enums.TeamMemberLevel
    password?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    rememberToken?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    isActive?: BoolWithAggregatesFilter<"TeamMember"> | boolean
    secretToken?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    tfaToken?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    company?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    rememberToken?: StringNullableFilter<"User"> | string | null
    disabled?: BoolFilter<"User"> | boolean
    tfaSecret?: StringNullableFilter<"User"> | string | null
    fpwToken?: StringNullableFilter<"User"> | string | null
    qrCodeVisibility?: BoolFilter<"User"> | boolean
    isDureation?: BoolFilter<"User"> | boolean
    tfaStatus?: BoolFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    startDate?: DateTimeNullableFilter<"User"> | Date | string | null
    endDate?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Organisation?: XOR<OrganisationNullableRelationFilter, OrganisationWhereInput> | null
    UserRole?: UserRoleListRelationFilter
    TeamMember?: TeamMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrderInput | SortOrder
    password?: SortOrder
    rememberToken?: SortOrderInput | SortOrder
    disabled?: SortOrder
    tfaSecret?: SortOrderInput | SortOrder
    fpwToken?: SortOrderInput | SortOrder
    qrCodeVisibility?: SortOrder
    isDureation?: SortOrder
    tfaStatus?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Organisation?: OrganisationOrderByWithRelationInput
    UserRole?: UserRoleOrderByRelationAggregateInput
    TeamMember?: TeamMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    company?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    rememberToken?: StringNullableFilter<"User"> | string | null
    disabled?: BoolFilter<"User"> | boolean
    tfaSecret?: StringNullableFilter<"User"> | string | null
    fpwToken?: StringNullableFilter<"User"> | string | null
    qrCodeVisibility?: BoolFilter<"User"> | boolean
    isDureation?: BoolFilter<"User"> | boolean
    tfaStatus?: BoolFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    startDate?: DateTimeNullableFilter<"User"> | Date | string | null
    endDate?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Organisation?: XOR<OrganisationNullableRelationFilter, OrganisationWhereInput> | null
    UserRole?: UserRoleListRelationFilter
    TeamMember?: TeamMemberListRelationFilter
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrderInput | SortOrder
    password?: SortOrder
    rememberToken?: SortOrderInput | SortOrder
    disabled?: SortOrder
    tfaSecret?: SortOrderInput | SortOrder
    fpwToken?: SortOrderInput | SortOrder
    qrCodeVisibility?: SortOrder
    isDureation?: SortOrder
    tfaStatus?: SortOrder
    emailVerifiedAt?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    company?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    rememberToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    disabled?: BoolWithAggregatesFilter<"User"> | boolean
    tfaSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    fpwToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    qrCodeVisibility?: BoolWithAggregatesFilter<"User"> | boolean
    isDureation?: BoolWithAggregatesFilter<"User"> | boolean
    tfaStatus?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: IntFilter<"UserRole"> | number
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    Role?: XOR<RoleRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    Role?: XOR<RoleRelationFilter, RoleWhereInput>
  }, "id" | "id">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserRole"> | number
    userId?: IntWithAggregatesFilter<"UserRole"> | number
    roleId?: IntWithAggregatesFilter<"UserRole"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
  }

  export type AssessmentCreateInput = {
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation: OrganisationCreateNestedOneWithoutAssessmentInput
    AssessmentAssign?: AssessmentAssignCreateNestedManyWithoutAssessmentInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutAssessmentInput
    AssessmentQuestion?: AssessmentQuestionCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    organisationId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignUncheckedCreateNestedManyWithoutAssessmentInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentInput
    AssessmentQuestion?: AssessmentQuestionUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUpdateOneRequiredWithoutAssessmentNestedInput
    AssessmentAssign?: AssessmentAssignUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestion?: AssessmentQuestionUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUncheckedUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestion?: AssessmentQuestionUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    organisationId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAssignCreateInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentAssignInput
    Team: TeamCreateNestedOneWithoutAssessmentAssignInput
    Member: TeamMemberCreateNestedOneWithoutAssessmentAssignInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutAssessmentAssignInput
  }

  export type AssessmentAssignUncheckedCreateInput = {
    id?: number
    assessmentId: number
    teamId: number
    memberId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentAssignInput
  }

  export type AssessmentAssignUpdateInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentAssignNestedInput
    Team?: TeamUpdateOneRequiredWithoutAssessmentAssignNestedInput
    Member?: TeamMemberUpdateOneRequiredWithoutAssessmentAssignNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutAssessmentAssignNestedInput
  }

  export type AssessmentAssignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentAssignNestedInput
  }

  export type AssessmentAssignCreateManyInput = {
    id?: number
    assessmentId: number
    teamId: number
    memberId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentAssignUpdateManyMutationInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAssignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionCreateInput = {
    questionId_: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentQuestionInput
    Question: QuestionCreateNestedOneWithoutAssessmentQuestionInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutAssessmentQuestionInput
  }

  export type AssessmentQuestionUncheckedCreateInput = {
    id?: number
    assessmentId: number
    questionId_: number
    questionId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentQuestionInput
  }

  export type AssessmentQuestionUpdateInput = {
    questionId_?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentQuestionNestedInput
    Question?: QuestionUpdateOneRequiredWithoutAssessmentQuestionNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutAssessmentQuestionNestedInput
  }

  export type AssessmentQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    questionId_?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentQuestionNestedInput
  }

  export type AssessmentQuestionCreateManyInput = {
    id?: number
    assessmentId: number
    questionId_: number
    questionId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionUpdateManyMutationInput = {
    questionId_?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    questionId_?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAnswerCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign: AssessmentQuestionAssignCreateNestedOneWithoutAssessmentQuestionAnswerInput
    AuestionAnswer: AuestionAnswerCreateNestedOneWithoutAssessmentQuestionAnswerInput
  }

  export type AssessmentQuestionAnswerUncheckedCreateInput = {
    id?: number
    assessmentQuestionAssignId: number
    questionAnswerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAnswerUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateOneRequiredWithoutAssessmentQuestionAnswerNestedInput
    AuestionAnswer?: AuestionAnswerUpdateOneRequiredWithoutAssessmentQuestionAnswerNestedInput
  }

  export type AssessmentQuestionAnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentQuestionAssignId?: IntFieldUpdateOperationsInput | number
    questionAnswerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAnswerCreateManyInput = {
    id?: number
    assessmentQuestionAssignId: number
    questionAnswerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAnswerUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentQuestionAssignId?: IntFieldUpdateOperationsInput | number
    questionAnswerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAssignCreateInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentQuestionAssignInput
    Team: TeamCreateNestedOneWithoutAssessmentQuestionAssignInput
    Member: TeamMemberCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestion: AssessmentQuestionCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentAssign: AssessmentAssignCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignUncheckedCreateInput = {
    id?: number
    assessmentId: number
    teamId: number
    memberId: number
    assessmentQuestionId: number
    assessmentAssignId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignUpdateInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    Team?: TeamUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    Member?: TeamMemberUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestion?: AssessmentQuestionUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentAssign?: AssessmentAssignUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    assessmentQuestionId?: IntFieldUpdateOperationsInput | number
    assessmentAssignId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignCreateManyInput = {
    id?: number
    assessmentId: number
    teamId: number
    memberId: number
    assessmentQuestionId: number
    assessmentAssignId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAssignUpdateManyMutationInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAssignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    assessmentQuestionId?: IntFieldUpdateOperationsInput | number
    assessmentAssignId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganisationCreateInput = {
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Owner: UserCreateNestedOneWithoutOrganisationInput
    Assessment?: AssessmentCreateNestedManyWithoutOrganisationInput
    Team?: TeamCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    isActive?: boolean
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment?: AssessmentUncheckedCreateNestedManyWithoutOrganisationInput
    Team?: TeamUncheckedCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Owner?: UserUpdateOneRequiredWithoutOrganisationNestedInput
    Assessment?: AssessmentUpdateManyWithoutOrganisationNestedInput
    Team?: TeamUpdateManyWithoutOrganisationNestedInput
  }

  export type OrganisationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUncheckedUpdateManyWithoutOrganisationNestedInput
    Team?: TeamUncheckedUpdateManyWithoutOrganisationNestedInput
  }

  export type OrganisationCreateManyInput = {
    id?: number
    name: string
    description: string
    isActive?: boolean
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganisationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganisationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    name: string
    description?: string | null
    questionType?: $Enums.QuestionType | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestion?: AssessmentQuestionCreateNestedManyWithoutQuestionInput
    AuestionAnswer?: AuestionAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    questionType?: $Enums.QuestionType | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestion?: AssessmentQuestionUncheckedCreateNestedManyWithoutQuestionInput
    AuestionAnswer?: AuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestion?: AssessmentQuestionUpdateManyWithoutQuestionNestedInput
    AuestionAnswer?: AuestionAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestion?: AssessmentQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    AuestionAnswer?: AuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    questionType?: $Enums.QuestionType | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuestionAnswerCreateInput = {
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Question: QuestionCreateNestedOneWithoutAuestionAnswerInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerCreateNestedManyWithoutAuestionAnswerInput
  }

  export type AuestionAnswerUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    questionId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedCreateNestedManyWithoutAuestionAnswerInput
  }

  export type AuestionAnswerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Question?: QuestionUpdateOneRequiredWithoutAuestionAnswerNestedInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUpdateManyWithoutAuestionAnswerNestedInput
  }

  export type AuestionAnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedUpdateManyWithoutAuestionAnswerNestedInput
  }

  export type AuestionAnswerCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    questionId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuestionAnswerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuestionAnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserRole?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation: OrganisationCreateNestedOneWithoutTeamInput
    AssessmentAssign?: AssessmentAssignCreateNestedManyWithoutTeamInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    organisationId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignUncheckedCreateNestedManyWithoutTeamInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUpdateOneRequiredWithoutTeamNestedInput
    AssessmentAssign?: AssessmentAssignUpdateManyWithoutTeamNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUncheckedUpdateManyWithoutTeamNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    organisationId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    Level?: $Enums.TeamMemberLevel
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Member: UserCreateNestedOneWithoutTeamMemberInput
    AssessmentAssign?: AssessmentAssignCreateNestedManyWithoutMemberInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutMemberInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: number
    memberId: number
    Level?: $Enums.TeamMemberLevel
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignUncheckedCreateNestedManyWithoutMemberInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutMemberInput
  }

  export type TeamMemberUpdateInput = {
    Level?: EnumTeamMemberLevelFieldUpdateOperationsInput | $Enums.TeamMemberLevel
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Member?: UserUpdateOneRequiredWithoutTeamMemberNestedInput
    AssessmentAssign?: AssessmentAssignUpdateManyWithoutMemberNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutMemberNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    Level?: EnumTeamMemberLevelFieldUpdateOperationsInput | $Enums.TeamMemberLevel
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUncheckedUpdateManyWithoutMemberNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type TeamMemberCreateManyInput = {
    id?: number
    memberId: number
    Level?: $Enums.TeamMemberLevel
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateManyMutationInput = {
    Level?: EnumTeamMemberLevelFieldUpdateOperationsInput | $Enums.TeamMemberLevel
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    Level?: EnumTeamMemberLevelFieldUpdateOperationsInput | $Enums.TeamMemberLevel
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    company?: string | null
    password: string
    rememberToken?: string | null
    disabled?: boolean
    tfaSecret?: string | null
    fpwToken?: string | null
    qrCodeVisibility?: boolean
    isDureation?: boolean
    tfaStatus?: boolean
    emailVerifiedAt?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation?: OrganisationCreateNestedOneWithoutOwnerInput
    UserRole?: UserRoleCreateNestedManyWithoutUserInput
    TeamMember?: TeamMemberCreateNestedManyWithoutMemberInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    company?: string | null
    password: string
    rememberToken?: string | null
    disabled?: boolean
    tfaSecret?: string | null
    fpwToken?: string | null
    qrCodeVisibility?: boolean
    isDureation?: boolean
    tfaStatus?: boolean
    emailVerifiedAt?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation?: OrganisationUncheckedCreateNestedOneWithoutOwnerInput
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    TeamMember?: TeamMemberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    tfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fpwToken?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeVisibility?: BoolFieldUpdateOperationsInput | boolean
    isDureation?: BoolFieldUpdateOperationsInput | boolean
    tfaStatus?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUpdateOneWithoutOwnerNestedInput
    UserRole?: UserRoleUpdateManyWithoutUserNestedInput
    TeamMember?: TeamMemberUpdateManyWithoutMemberNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    tfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fpwToken?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeVisibility?: BoolFieldUpdateOperationsInput | boolean
    isDureation?: BoolFieldUpdateOperationsInput | boolean
    tfaStatus?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUncheckedUpdateOneWithoutOwnerNestedInput
    UserRole?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    TeamMember?: TeamMemberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    company?: string | null
    password: string
    rememberToken?: string | null
    disabled?: boolean
    tfaSecret?: string | null
    fpwToken?: string | null
    qrCodeVisibility?: boolean
    isDureation?: boolean
    tfaStatus?: boolean
    emailVerifiedAt?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    tfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fpwToken?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeVisibility?: BoolFieldUpdateOperationsInput | boolean
    isDureation?: BoolFieldUpdateOperationsInput | boolean
    tfaStatus?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    tfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fpwToken?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeVisibility?: BoolFieldUpdateOperationsInput | boolean
    isDureation?: BoolFieldUpdateOperationsInput | boolean
    tfaStatus?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutUserRoleInput
    Role: RoleCreateNestedOneWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: number
    userId: number
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserRoleNestedInput
    Role?: RoleUpdateOneRequiredWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyInput = {
    id?: number
    userId: number
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrganisationRelationFilter = {
    is?: OrganisationWhereInput
    isNot?: OrganisationWhereInput
  }

  export type AssessmentAssignListRelationFilter = {
    every?: AssessmentAssignWhereInput
    some?: AssessmentAssignWhereInput
    none?: AssessmentAssignWhereInput
  }

  export type AssessmentQuestionAssignListRelationFilter = {
    every?: AssessmentQuestionAssignWhereInput
    some?: AssessmentQuestionAssignWhereInput
    none?: AssessmentQuestionAssignWhereInput
  }

  export type AssessmentQuestionListRelationFilter = {
    every?: AssessmentQuestionWhereInput
    some?: AssessmentQuestionWhereInput
    none?: AssessmentQuestionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssessmentAssignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentQuestionAssignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    organisationId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentAvgOrderByAggregateInput = {
    id?: SortOrder
    organisationId?: SortOrder
  }

  export type AssessmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    organisationId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    organisationId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentSumOrderByAggregateInput = {
    id?: SortOrder
    organisationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AssessmentRelationFilter = {
    is?: AssessmentWhereInput
    isNot?: AssessmentWhereInput
  }

  export type TeamRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TeamMemberRelationFilter = {
    is?: TeamMemberWhereInput
    isNot?: TeamMemberWhereInput
  }

  export type AssessmentAssignCountOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentAssignAvgOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
  }

  export type AssessmentAssignMaxOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentAssignMinOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentAssignSumOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AssessmentQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId_?: SortOrder
    questionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId_?: SortOrder
    questionId?: SortOrder
  }

  export type AssessmentQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId_?: SortOrder
    questionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId_?: SortOrder
    questionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    questionId_?: SortOrder
    questionId?: SortOrder
  }

  export type AssessmentQuestionAssignRelationFilter = {
    is?: AssessmentQuestionAssignWhereInput
    isNot?: AssessmentQuestionAssignWhereInput
  }

  export type AuestionAnswerRelationFilter = {
    is?: AuestionAnswerWhereInput
    isNot?: AuestionAnswerWhereInput
  }

  export type AssessmentQuestionAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    assessmentQuestionAssignId?: SortOrder
    questionAnswerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionAnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    assessmentQuestionAssignId?: SortOrder
    questionAnswerId?: SortOrder
  }

  export type AssessmentQuestionAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    assessmentQuestionAssignId?: SortOrder
    questionAnswerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    assessmentQuestionAssignId?: SortOrder
    questionAnswerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionAnswerSumOrderByAggregateInput = {
    id?: SortOrder
    assessmentQuestionAssignId?: SortOrder
    questionAnswerId?: SortOrder
  }

  export type AssessmentQuestionRelationFilter = {
    is?: AssessmentQuestionWhereInput
    isNot?: AssessmentQuestionWhereInput
  }

  export type AssessmentAssignRelationFilter = {
    is?: AssessmentAssignWhereInput
    isNot?: AssessmentAssignWhereInput
  }

  export type AssessmentQuestionAnswerListRelationFilter = {
    every?: AssessmentQuestionAnswerWhereInput
    some?: AssessmentQuestionAnswerWhereInput
    none?: AssessmentQuestionAnswerWhereInput
  }

  export type AssessmentQuestionAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentQuestionAssignCountOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    assessmentQuestionId?: SortOrder
    assessmentAssignId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionAssignAvgOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    assessmentQuestionId?: SortOrder
    assessmentAssignId?: SortOrder
  }

  export type AssessmentQuestionAssignMaxOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    assessmentQuestionId?: SortOrder
    assessmentAssignId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionAssignMinOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    assessmentQuestionId?: SortOrder
    assessmentAssignId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentQuestionAssignSumOrderByAggregateInput = {
    id?: SortOrder
    assessmentId?: SortOrder
    teamId?: SortOrder
    memberId?: SortOrder
    assessmentQuestionId?: SortOrder
    assessmentAssignId?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AssessmentListRelationFilter = {
    every?: AssessmentWhereInput
    some?: AssessmentWhereInput
    none?: AssessmentWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type AssessmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganisationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganisationAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type OrganisationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganisationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganisationSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumQuestionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.QuestionType[] | null
    notIn?: $Enums.QuestionType[] | null
    not?: NestedEnumQuestionTypeNullableFilter<$PrismaModel> | $Enums.QuestionType | null
  }

  export type AuestionAnswerListRelationFilter = {
    every?: AuestionAnswerWhereInput
    some?: AuestionAnswerWhereInput
    none?: AuestionAnswerWhereInput
  }

  export type AuestionAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    questionType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    questionType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    questionType?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumQuestionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.QuestionType[] | null
    notIn?: $Enums.QuestionType[] | null
    not?: NestedEnumQuestionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeNullableFilter<$PrismaModel>
  }

  export type AuestionAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    questionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuestionAnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type AuestionAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    questionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuestionAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    questionId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuestionAnswerSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    organisationId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
    organisationId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    organisationId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    organisationId?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
    organisationId?: SortOrder
  }

  export type EnumTeamMemberLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberLevel | EnumTeamMemberLevelFieldRefInput<$PrismaModel>
    in?: $Enums.TeamMemberLevel[]
    notIn?: $Enums.TeamMemberLevel[]
    not?: NestedEnumTeamMemberLevelFilter<$PrismaModel> | $Enums.TeamMemberLevel
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    Level?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    Level?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    Level?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    isActive?: SortOrder
    secretToken?: SortOrder
    tfaToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberSumOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
  }

  export type EnumTeamMemberLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberLevel | EnumTeamMemberLevelFieldRefInput<$PrismaModel>
    in?: $Enums.TeamMemberLevel[]
    notIn?: $Enums.TeamMemberLevel[]
    not?: NestedEnumTeamMemberLevelWithAggregatesFilter<$PrismaModel> | $Enums.TeamMemberLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamMemberLevelFilter<$PrismaModel>
    _max?: NestedEnumTeamMemberLevelFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrganisationNullableRelationFilter = {
    is?: OrganisationWhereInput | null
    isNot?: OrganisationWhereInput | null
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    disabled?: SortOrder
    tfaSecret?: SortOrder
    fpwToken?: SortOrder
    qrCodeVisibility?: SortOrder
    isDureation?: SortOrder
    tfaStatus?: SortOrder
    emailVerifiedAt?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    deletedAt?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    disabled?: SortOrder
    tfaSecret?: SortOrder
    fpwToken?: SortOrder
    qrCodeVisibility?: SortOrder
    isDureation?: SortOrder
    tfaStatus?: SortOrder
    emailVerifiedAt?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    deletedAt?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    password?: SortOrder
    rememberToken?: SortOrder
    disabled?: SortOrder
    tfaSecret?: SortOrder
    fpwToken?: SortOrder
    qrCodeVisibility?: SortOrder
    isDureation?: SortOrder
    tfaStatus?: SortOrder
    emailVerifiedAt?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    deletedAt?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type OrganisationCreateNestedOneWithoutAssessmentInput = {
    create?: XOR<OrganisationCreateWithoutAssessmentInput, OrganisationUncheckedCreateWithoutAssessmentInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutAssessmentInput
    connect?: OrganisationWhereUniqueInput
  }

  export type AssessmentAssignCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AssessmentAssignCreateWithoutAssessmentInput, AssessmentAssignUncheckedCreateWithoutAssessmentInput> | AssessmentAssignCreateWithoutAssessmentInput[] | AssessmentAssignUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutAssessmentInput | AssessmentAssignCreateOrConnectWithoutAssessmentInput[]
    createMany?: AssessmentAssignCreateManyAssessmentInputEnvelope
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
  }

  export type AssessmentQuestionAssignCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionAssignCreateWithoutAssessmentInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentInputEnvelope
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
  }

  export type AssessmentQuestionCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionCreateWithoutAssessmentInput[] | AssessmentQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAssessmentInput | AssessmentQuestionCreateOrConnectWithoutAssessmentInput[]
    createMany?: AssessmentQuestionCreateManyAssessmentInputEnvelope
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
  }

  export type AssessmentAssignUncheckedCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AssessmentAssignCreateWithoutAssessmentInput, AssessmentAssignUncheckedCreateWithoutAssessmentInput> | AssessmentAssignCreateWithoutAssessmentInput[] | AssessmentAssignUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutAssessmentInput | AssessmentAssignCreateOrConnectWithoutAssessmentInput[]
    createMany?: AssessmentAssignCreateManyAssessmentInputEnvelope
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
  }

  export type AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionAssignCreateWithoutAssessmentInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentInputEnvelope
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
  }

  export type AssessmentQuestionUncheckedCreateNestedManyWithoutAssessmentInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionCreateWithoutAssessmentInput[] | AssessmentQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAssessmentInput | AssessmentQuestionCreateOrConnectWithoutAssessmentInput[]
    createMany?: AssessmentQuestionCreateManyAssessmentInputEnvelope
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganisationUpdateOneRequiredWithoutAssessmentNestedInput = {
    create?: XOR<OrganisationCreateWithoutAssessmentInput, OrganisationUncheckedCreateWithoutAssessmentInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutAssessmentInput
    upsert?: OrganisationUpsertWithoutAssessmentInput
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutAssessmentInput, OrganisationUpdateWithoutAssessmentInput>, OrganisationUncheckedUpdateWithoutAssessmentInput>
  }

  export type AssessmentAssignUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentAssignCreateWithoutAssessmentInput, AssessmentAssignUncheckedCreateWithoutAssessmentInput> | AssessmentAssignCreateWithoutAssessmentInput[] | AssessmentAssignUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutAssessmentInput | AssessmentAssignCreateOrConnectWithoutAssessmentInput[]
    upsert?: AssessmentAssignUpsertWithWhereUniqueWithoutAssessmentInput | AssessmentAssignUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AssessmentAssignCreateManyAssessmentInputEnvelope
    set?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    disconnect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    delete?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    update?: AssessmentAssignUpdateWithWhereUniqueWithoutAssessmentInput | AssessmentAssignUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AssessmentAssignUpdateManyWithWhereWithoutAssessmentInput | AssessmentAssignUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AssessmentAssignScalarWhereInput | AssessmentAssignScalarWhereInput[]
  }

  export type AssessmentQuestionAssignUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionAssignCreateWithoutAssessmentInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentInput[]
    upsert?: AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentInputEnvelope
    set?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    disconnect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    delete?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    update?: AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentInput | AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
  }

  export type AssessmentQuestionUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionCreateWithoutAssessmentInput[] | AssessmentQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAssessmentInput | AssessmentQuestionCreateOrConnectWithoutAssessmentInput[]
    upsert?: AssessmentQuestionUpsertWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AssessmentQuestionCreateManyAssessmentInputEnvelope
    set?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    disconnect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    delete?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    update?: AssessmentQuestionUpdateWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AssessmentQuestionUpdateManyWithWhereWithoutAssessmentInput | AssessmentQuestionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AssessmentQuestionScalarWhereInput | AssessmentQuestionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssessmentAssignUncheckedUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentAssignCreateWithoutAssessmentInput, AssessmentAssignUncheckedCreateWithoutAssessmentInput> | AssessmentAssignCreateWithoutAssessmentInput[] | AssessmentAssignUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutAssessmentInput | AssessmentAssignCreateOrConnectWithoutAssessmentInput[]
    upsert?: AssessmentAssignUpsertWithWhereUniqueWithoutAssessmentInput | AssessmentAssignUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AssessmentAssignCreateManyAssessmentInputEnvelope
    set?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    disconnect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    delete?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    update?: AssessmentAssignUpdateWithWhereUniqueWithoutAssessmentInput | AssessmentAssignUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AssessmentAssignUpdateManyWithWhereWithoutAssessmentInput | AssessmentAssignUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AssessmentAssignScalarWhereInput | AssessmentAssignScalarWhereInput[]
  }

  export type AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionAssignCreateWithoutAssessmentInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentInput[]
    upsert?: AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentInputEnvelope
    set?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    disconnect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    delete?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    update?: AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentInput | AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
  }

  export type AssessmentQuestionUncheckedUpdateManyWithoutAssessmentNestedInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput> | AssessmentQuestionCreateWithoutAssessmentInput[] | AssessmentQuestionUncheckedCreateWithoutAssessmentInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAssessmentInput | AssessmentQuestionCreateOrConnectWithoutAssessmentInput[]
    upsert?: AssessmentQuestionUpsertWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionUpsertWithWhereUniqueWithoutAssessmentInput[]
    createMany?: AssessmentQuestionCreateManyAssessmentInputEnvelope
    set?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    disconnect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    delete?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    update?: AssessmentQuestionUpdateWithWhereUniqueWithoutAssessmentInput | AssessmentQuestionUpdateWithWhereUniqueWithoutAssessmentInput[]
    updateMany?: AssessmentQuestionUpdateManyWithWhereWithoutAssessmentInput | AssessmentQuestionUpdateManyWithWhereWithoutAssessmentInput[]
    deleteMany?: AssessmentQuestionScalarWhereInput | AssessmentQuestionScalarWhereInput[]
  }

  export type AssessmentCreateNestedOneWithoutAssessmentAssignInput = {
    create?: XOR<AssessmentCreateWithoutAssessmentAssignInput, AssessmentUncheckedCreateWithoutAssessmentAssignInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutAssessmentAssignInput
    connect?: AssessmentWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutAssessmentAssignInput = {
    create?: XOR<TeamCreateWithoutAssessmentAssignInput, TeamUncheckedCreateWithoutAssessmentAssignInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAssessmentAssignInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamMemberCreateNestedOneWithoutAssessmentAssignInput = {
    create?: XOR<TeamMemberCreateWithoutAssessmentAssignInput, TeamMemberUncheckedCreateWithoutAssessmentAssignInput>
    connectOrCreate?: TeamMemberCreateOrConnectWithoutAssessmentAssignInput
    connect?: TeamMemberWhereUniqueInput
  }

  export type AssessmentQuestionAssignCreateNestedManyWithoutAssessmentAssignInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentAssignInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentAssignInput> | AssessmentQuestionAssignCreateWithoutAssessmentAssignInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentAssignInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentAssignInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentAssignInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentAssignInputEnvelope
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
  }

  export type AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentAssignInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentAssignInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentAssignInput> | AssessmentQuestionAssignCreateWithoutAssessmentAssignInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentAssignInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentAssignInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentAssignInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentAssignInputEnvelope
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
  }

  export type AssessmentUpdateOneRequiredWithoutAssessmentAssignNestedInput = {
    create?: XOR<AssessmentCreateWithoutAssessmentAssignInput, AssessmentUncheckedCreateWithoutAssessmentAssignInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutAssessmentAssignInput
    upsert?: AssessmentUpsertWithoutAssessmentAssignInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutAssessmentAssignInput, AssessmentUpdateWithoutAssessmentAssignInput>, AssessmentUncheckedUpdateWithoutAssessmentAssignInput>
  }

  export type TeamUpdateOneRequiredWithoutAssessmentAssignNestedInput = {
    create?: XOR<TeamCreateWithoutAssessmentAssignInput, TeamUncheckedCreateWithoutAssessmentAssignInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAssessmentAssignInput
    upsert?: TeamUpsertWithoutAssessmentAssignInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutAssessmentAssignInput, TeamUpdateWithoutAssessmentAssignInput>, TeamUncheckedUpdateWithoutAssessmentAssignInput>
  }

  export type TeamMemberUpdateOneRequiredWithoutAssessmentAssignNestedInput = {
    create?: XOR<TeamMemberCreateWithoutAssessmentAssignInput, TeamMemberUncheckedCreateWithoutAssessmentAssignInput>
    connectOrCreate?: TeamMemberCreateOrConnectWithoutAssessmentAssignInput
    upsert?: TeamMemberUpsertWithoutAssessmentAssignInput
    connect?: TeamMemberWhereUniqueInput
    update?: XOR<XOR<TeamMemberUpdateToOneWithWhereWithoutAssessmentAssignInput, TeamMemberUpdateWithoutAssessmentAssignInput>, TeamMemberUncheckedUpdateWithoutAssessmentAssignInput>
  }

  export type AssessmentQuestionAssignUpdateManyWithoutAssessmentAssignNestedInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentAssignInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentAssignInput> | AssessmentQuestionAssignCreateWithoutAssessmentAssignInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentAssignInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentAssignInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentAssignInput[]
    upsert?: AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentAssignInput | AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentAssignInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentAssignInputEnvelope
    set?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    disconnect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    delete?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    update?: AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentAssignInput | AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentAssignInput[]
    updateMany?: AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentAssignInput | AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentAssignInput[]
    deleteMany?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
  }

  export type AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentAssignNestedInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentAssignInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentAssignInput> | AssessmentQuestionAssignCreateWithoutAssessmentAssignInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentAssignInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentAssignInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentAssignInput[]
    upsert?: AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentAssignInput | AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentAssignInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentAssignInputEnvelope
    set?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    disconnect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    delete?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    update?: AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentAssignInput | AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentAssignInput[]
    updateMany?: AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentAssignInput | AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentAssignInput[]
    deleteMany?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
  }

  export type AssessmentCreateNestedOneWithoutAssessmentQuestionInput = {
    create?: XOR<AssessmentCreateWithoutAssessmentQuestionInput, AssessmentUncheckedCreateWithoutAssessmentQuestionInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutAssessmentQuestionInput
    connect?: AssessmentWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutAssessmentQuestionInput = {
    create?: XOR<QuestionCreateWithoutAssessmentQuestionInput, QuestionUncheckedCreateWithoutAssessmentQuestionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAssessmentQuestionInput
    connect?: QuestionWhereUniqueInput
  }

  export type AssessmentQuestionAssignCreateNestedManyWithoutAssessmentQuestionInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentQuestionInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionInput> | AssessmentQuestionAssignCreateWithoutAssessmentQuestionInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentQuestionInputEnvelope
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
  }

  export type AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentQuestionInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentQuestionInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionInput> | AssessmentQuestionAssignCreateWithoutAssessmentQuestionInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentQuestionInputEnvelope
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
  }

  export type AssessmentUpdateOneRequiredWithoutAssessmentQuestionNestedInput = {
    create?: XOR<AssessmentCreateWithoutAssessmentQuestionInput, AssessmentUncheckedCreateWithoutAssessmentQuestionInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutAssessmentQuestionInput
    upsert?: AssessmentUpsertWithoutAssessmentQuestionInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutAssessmentQuestionInput, AssessmentUpdateWithoutAssessmentQuestionInput>, AssessmentUncheckedUpdateWithoutAssessmentQuestionInput>
  }

  export type QuestionUpdateOneRequiredWithoutAssessmentQuestionNestedInput = {
    create?: XOR<QuestionCreateWithoutAssessmentQuestionInput, QuestionUncheckedCreateWithoutAssessmentQuestionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAssessmentQuestionInput
    upsert?: QuestionUpsertWithoutAssessmentQuestionInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAssessmentQuestionInput, QuestionUpdateWithoutAssessmentQuestionInput>, QuestionUncheckedUpdateWithoutAssessmentQuestionInput>
  }

  export type AssessmentQuestionAssignUpdateManyWithoutAssessmentQuestionNestedInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentQuestionInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionInput> | AssessmentQuestionAssignCreateWithoutAssessmentQuestionInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionInput[]
    upsert?: AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentQuestionInput | AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentQuestionInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentQuestionInputEnvelope
    set?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    disconnect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    delete?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    update?: AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentQuestionInput | AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentQuestionInput[]
    updateMany?: AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentQuestionInput | AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentQuestionInput[]
    deleteMany?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
  }

  export type AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentQuestionNestedInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentQuestionInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionInput> | AssessmentQuestionAssignCreateWithoutAssessmentQuestionInput[] | AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionInput | AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionInput[]
    upsert?: AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentQuestionInput | AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentQuestionInput[]
    createMany?: AssessmentQuestionAssignCreateManyAssessmentQuestionInputEnvelope
    set?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    disconnect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    delete?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    update?: AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentQuestionInput | AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentQuestionInput[]
    updateMany?: AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentQuestionInput | AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentQuestionInput[]
    deleteMany?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
  }

  export type AssessmentQuestionAssignCreateNestedOneWithoutAssessmentQuestionAnswerInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentQuestionAnswerInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionAnswerInput>
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionAnswerInput
    connect?: AssessmentQuestionAssignWhereUniqueInput
  }

  export type AuestionAnswerCreateNestedOneWithoutAssessmentQuestionAnswerInput = {
    create?: XOR<AuestionAnswerCreateWithoutAssessmentQuestionAnswerInput, AuestionAnswerUncheckedCreateWithoutAssessmentQuestionAnswerInput>
    connectOrCreate?: AuestionAnswerCreateOrConnectWithoutAssessmentQuestionAnswerInput
    connect?: AuestionAnswerWhereUniqueInput
  }

  export type AssessmentQuestionAssignUpdateOneRequiredWithoutAssessmentQuestionAnswerNestedInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutAssessmentQuestionAnswerInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionAnswerInput>
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionAnswerInput
    upsert?: AssessmentQuestionAssignUpsertWithoutAssessmentQuestionAnswerInput
    connect?: AssessmentQuestionAssignWhereUniqueInput
    update?: XOR<XOR<AssessmentQuestionAssignUpdateToOneWithWhereWithoutAssessmentQuestionAnswerInput, AssessmentQuestionAssignUpdateWithoutAssessmentQuestionAnswerInput>, AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentQuestionAnswerInput>
  }

  export type AuestionAnswerUpdateOneRequiredWithoutAssessmentQuestionAnswerNestedInput = {
    create?: XOR<AuestionAnswerCreateWithoutAssessmentQuestionAnswerInput, AuestionAnswerUncheckedCreateWithoutAssessmentQuestionAnswerInput>
    connectOrCreate?: AuestionAnswerCreateOrConnectWithoutAssessmentQuestionAnswerInput
    upsert?: AuestionAnswerUpsertWithoutAssessmentQuestionAnswerInput
    connect?: AuestionAnswerWhereUniqueInput
    update?: XOR<XOR<AuestionAnswerUpdateToOneWithWhereWithoutAssessmentQuestionAnswerInput, AuestionAnswerUpdateWithoutAssessmentQuestionAnswerInput>, AuestionAnswerUncheckedUpdateWithoutAssessmentQuestionAnswerInput>
  }

  export type AssessmentCreateNestedOneWithoutAssessmentQuestionAssignInput = {
    create?: XOR<AssessmentCreateWithoutAssessmentQuestionAssignInput, AssessmentUncheckedCreateWithoutAssessmentQuestionAssignInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutAssessmentQuestionAssignInput
    connect?: AssessmentWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutAssessmentQuestionAssignInput = {
    create?: XOR<TeamCreateWithoutAssessmentQuestionAssignInput, TeamUncheckedCreateWithoutAssessmentQuestionAssignInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAssessmentQuestionAssignInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamMemberCreateNestedOneWithoutAssessmentQuestionAssignInput = {
    create?: XOR<TeamMemberCreateWithoutAssessmentQuestionAssignInput, TeamMemberUncheckedCreateWithoutAssessmentQuestionAssignInput>
    connectOrCreate?: TeamMemberCreateOrConnectWithoutAssessmentQuestionAssignInput
    connect?: TeamMemberWhereUniqueInput
  }

  export type AssessmentQuestionCreateNestedOneWithoutAssessmentQuestionAssignInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAssessmentQuestionAssignInput, AssessmentQuestionUncheckedCreateWithoutAssessmentQuestionAssignInput>
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAssessmentQuestionAssignInput
    connect?: AssessmentQuestionWhereUniqueInput
  }

  export type AssessmentAssignCreateNestedOneWithoutAssessmentQuestionAssignInput = {
    create?: XOR<AssessmentAssignCreateWithoutAssessmentQuestionAssignInput, AssessmentAssignUncheckedCreateWithoutAssessmentQuestionAssignInput>
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutAssessmentQuestionAssignInput
    connect?: AssessmentAssignWhereUniqueInput
  }

  export type AssessmentQuestionAnswerCreateNestedManyWithoutAssessmentQuestionAssignInput = {
    create?: XOR<AssessmentQuestionAnswerCreateWithoutAssessmentQuestionAssignInput, AssessmentQuestionAnswerUncheckedCreateWithoutAssessmentQuestionAssignInput> | AssessmentQuestionAnswerCreateWithoutAssessmentQuestionAssignInput[] | AssessmentQuestionAnswerUncheckedCreateWithoutAssessmentQuestionAssignInput[]
    connectOrCreate?: AssessmentQuestionAnswerCreateOrConnectWithoutAssessmentQuestionAssignInput | AssessmentQuestionAnswerCreateOrConnectWithoutAssessmentQuestionAssignInput[]
    createMany?: AssessmentQuestionAnswerCreateManyAssessmentQuestionAssignInputEnvelope
    connect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
  }

  export type AssessmentQuestionAnswerUncheckedCreateNestedManyWithoutAssessmentQuestionAssignInput = {
    create?: XOR<AssessmentQuestionAnswerCreateWithoutAssessmentQuestionAssignInput, AssessmentQuestionAnswerUncheckedCreateWithoutAssessmentQuestionAssignInput> | AssessmentQuestionAnswerCreateWithoutAssessmentQuestionAssignInput[] | AssessmentQuestionAnswerUncheckedCreateWithoutAssessmentQuestionAssignInput[]
    connectOrCreate?: AssessmentQuestionAnswerCreateOrConnectWithoutAssessmentQuestionAssignInput | AssessmentQuestionAnswerCreateOrConnectWithoutAssessmentQuestionAssignInput[]
    createMany?: AssessmentQuestionAnswerCreateManyAssessmentQuestionAssignInputEnvelope
    connect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
  }

  export type AssessmentUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput = {
    create?: XOR<AssessmentCreateWithoutAssessmentQuestionAssignInput, AssessmentUncheckedCreateWithoutAssessmentQuestionAssignInput>
    connectOrCreate?: AssessmentCreateOrConnectWithoutAssessmentQuestionAssignInput
    upsert?: AssessmentUpsertWithoutAssessmentQuestionAssignInput
    connect?: AssessmentWhereUniqueInput
    update?: XOR<XOR<AssessmentUpdateToOneWithWhereWithoutAssessmentQuestionAssignInput, AssessmentUpdateWithoutAssessmentQuestionAssignInput>, AssessmentUncheckedUpdateWithoutAssessmentQuestionAssignInput>
  }

  export type TeamUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput = {
    create?: XOR<TeamCreateWithoutAssessmentQuestionAssignInput, TeamUncheckedCreateWithoutAssessmentQuestionAssignInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAssessmentQuestionAssignInput
    upsert?: TeamUpsertWithoutAssessmentQuestionAssignInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutAssessmentQuestionAssignInput, TeamUpdateWithoutAssessmentQuestionAssignInput>, TeamUncheckedUpdateWithoutAssessmentQuestionAssignInput>
  }

  export type TeamMemberUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput = {
    create?: XOR<TeamMemberCreateWithoutAssessmentQuestionAssignInput, TeamMemberUncheckedCreateWithoutAssessmentQuestionAssignInput>
    connectOrCreate?: TeamMemberCreateOrConnectWithoutAssessmentQuestionAssignInput
    upsert?: TeamMemberUpsertWithoutAssessmentQuestionAssignInput
    connect?: TeamMemberWhereUniqueInput
    update?: XOR<XOR<TeamMemberUpdateToOneWithWhereWithoutAssessmentQuestionAssignInput, TeamMemberUpdateWithoutAssessmentQuestionAssignInput>, TeamMemberUncheckedUpdateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentQuestionUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput = {
    create?: XOR<AssessmentQuestionCreateWithoutAssessmentQuestionAssignInput, AssessmentQuestionUncheckedCreateWithoutAssessmentQuestionAssignInput>
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutAssessmentQuestionAssignInput
    upsert?: AssessmentQuestionUpsertWithoutAssessmentQuestionAssignInput
    connect?: AssessmentQuestionWhereUniqueInput
    update?: XOR<XOR<AssessmentQuestionUpdateToOneWithWhereWithoutAssessmentQuestionAssignInput, AssessmentQuestionUpdateWithoutAssessmentQuestionAssignInput>, AssessmentQuestionUncheckedUpdateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentAssignUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput = {
    create?: XOR<AssessmentAssignCreateWithoutAssessmentQuestionAssignInput, AssessmentAssignUncheckedCreateWithoutAssessmentQuestionAssignInput>
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutAssessmentQuestionAssignInput
    upsert?: AssessmentAssignUpsertWithoutAssessmentQuestionAssignInput
    connect?: AssessmentAssignWhereUniqueInput
    update?: XOR<XOR<AssessmentAssignUpdateToOneWithWhereWithoutAssessmentQuestionAssignInput, AssessmentAssignUpdateWithoutAssessmentQuestionAssignInput>, AssessmentAssignUncheckedUpdateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentQuestionAnswerUpdateManyWithoutAssessmentQuestionAssignNestedInput = {
    create?: XOR<AssessmentQuestionAnswerCreateWithoutAssessmentQuestionAssignInput, AssessmentQuestionAnswerUncheckedCreateWithoutAssessmentQuestionAssignInput> | AssessmentQuestionAnswerCreateWithoutAssessmentQuestionAssignInput[] | AssessmentQuestionAnswerUncheckedCreateWithoutAssessmentQuestionAssignInput[]
    connectOrCreate?: AssessmentQuestionAnswerCreateOrConnectWithoutAssessmentQuestionAssignInput | AssessmentQuestionAnswerCreateOrConnectWithoutAssessmentQuestionAssignInput[]
    upsert?: AssessmentQuestionAnswerUpsertWithWhereUniqueWithoutAssessmentQuestionAssignInput | AssessmentQuestionAnswerUpsertWithWhereUniqueWithoutAssessmentQuestionAssignInput[]
    createMany?: AssessmentQuestionAnswerCreateManyAssessmentQuestionAssignInputEnvelope
    set?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    disconnect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    delete?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    connect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    update?: AssessmentQuestionAnswerUpdateWithWhereUniqueWithoutAssessmentQuestionAssignInput | AssessmentQuestionAnswerUpdateWithWhereUniqueWithoutAssessmentQuestionAssignInput[]
    updateMany?: AssessmentQuestionAnswerUpdateManyWithWhereWithoutAssessmentQuestionAssignInput | AssessmentQuestionAnswerUpdateManyWithWhereWithoutAssessmentQuestionAssignInput[]
    deleteMany?: AssessmentQuestionAnswerScalarWhereInput | AssessmentQuestionAnswerScalarWhereInput[]
  }

  export type AssessmentQuestionAnswerUncheckedUpdateManyWithoutAssessmentQuestionAssignNestedInput = {
    create?: XOR<AssessmentQuestionAnswerCreateWithoutAssessmentQuestionAssignInput, AssessmentQuestionAnswerUncheckedCreateWithoutAssessmentQuestionAssignInput> | AssessmentQuestionAnswerCreateWithoutAssessmentQuestionAssignInput[] | AssessmentQuestionAnswerUncheckedCreateWithoutAssessmentQuestionAssignInput[]
    connectOrCreate?: AssessmentQuestionAnswerCreateOrConnectWithoutAssessmentQuestionAssignInput | AssessmentQuestionAnswerCreateOrConnectWithoutAssessmentQuestionAssignInput[]
    upsert?: AssessmentQuestionAnswerUpsertWithWhereUniqueWithoutAssessmentQuestionAssignInput | AssessmentQuestionAnswerUpsertWithWhereUniqueWithoutAssessmentQuestionAssignInput[]
    createMany?: AssessmentQuestionAnswerCreateManyAssessmentQuestionAssignInputEnvelope
    set?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    disconnect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    delete?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    connect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    update?: AssessmentQuestionAnswerUpdateWithWhereUniqueWithoutAssessmentQuestionAssignInput | AssessmentQuestionAnswerUpdateWithWhereUniqueWithoutAssessmentQuestionAssignInput[]
    updateMany?: AssessmentQuestionAnswerUpdateManyWithWhereWithoutAssessmentQuestionAssignInput | AssessmentQuestionAnswerUpdateManyWithWhereWithoutAssessmentQuestionAssignInput[]
    deleteMany?: AssessmentQuestionAnswerScalarWhereInput | AssessmentQuestionAnswerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrganisationInput = {
    create?: XOR<UserCreateWithoutOrganisationInput, UserUncheckedCreateWithoutOrganisationInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganisationInput
    connect?: UserWhereUniqueInput
  }

  export type AssessmentCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<AssessmentCreateWithoutOrganisationInput, AssessmentUncheckedCreateWithoutOrganisationInput> | AssessmentCreateWithoutOrganisationInput[] | AssessmentUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutOrganisationInput | AssessmentCreateOrConnectWithoutOrganisationInput[]
    createMany?: AssessmentCreateManyOrganisationInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<TeamCreateWithoutOrganisationInput, TeamUncheckedCreateWithoutOrganisationInput> | TeamCreateWithoutOrganisationInput[] | TeamUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOrganisationInput | TeamCreateOrConnectWithoutOrganisationInput[]
    createMany?: TeamCreateManyOrganisationInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type AssessmentUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<AssessmentCreateWithoutOrganisationInput, AssessmentUncheckedCreateWithoutOrganisationInput> | AssessmentCreateWithoutOrganisationInput[] | AssessmentUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutOrganisationInput | AssessmentCreateOrConnectWithoutOrganisationInput[]
    createMany?: AssessmentCreateManyOrganisationInputEnvelope
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutOrganisationInput = {
    create?: XOR<TeamCreateWithoutOrganisationInput, TeamUncheckedCreateWithoutOrganisationInput> | TeamCreateWithoutOrganisationInput[] | TeamUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOrganisationInput | TeamCreateOrConnectWithoutOrganisationInput[]
    createMany?: TeamCreateManyOrganisationInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrganisationNestedInput = {
    create?: XOR<UserCreateWithoutOrganisationInput, UserUncheckedCreateWithoutOrganisationInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrganisationInput
    upsert?: UserUpsertWithoutOrganisationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrganisationInput, UserUpdateWithoutOrganisationInput>, UserUncheckedUpdateWithoutOrganisationInput>
  }

  export type AssessmentUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<AssessmentCreateWithoutOrganisationInput, AssessmentUncheckedCreateWithoutOrganisationInput> | AssessmentCreateWithoutOrganisationInput[] | AssessmentUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutOrganisationInput | AssessmentCreateOrConnectWithoutOrganisationInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutOrganisationInput | AssessmentUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: AssessmentCreateManyOrganisationInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutOrganisationInput | AssessmentUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutOrganisationInput | AssessmentUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<TeamCreateWithoutOrganisationInput, TeamUncheckedCreateWithoutOrganisationInput> | TeamCreateWithoutOrganisationInput[] | TeamUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOrganisationInput | TeamCreateOrConnectWithoutOrganisationInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutOrganisationInput | TeamUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: TeamCreateManyOrganisationInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutOrganisationInput | TeamUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutOrganisationInput | TeamUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type AssessmentUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<AssessmentCreateWithoutOrganisationInput, AssessmentUncheckedCreateWithoutOrganisationInput> | AssessmentCreateWithoutOrganisationInput[] | AssessmentUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: AssessmentCreateOrConnectWithoutOrganisationInput | AssessmentCreateOrConnectWithoutOrganisationInput[]
    upsert?: AssessmentUpsertWithWhereUniqueWithoutOrganisationInput | AssessmentUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: AssessmentCreateManyOrganisationInputEnvelope
    set?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    disconnect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    delete?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    connect?: AssessmentWhereUniqueInput | AssessmentWhereUniqueInput[]
    update?: AssessmentUpdateWithWhereUniqueWithoutOrganisationInput | AssessmentUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: AssessmentUpdateManyWithWhereWithoutOrganisationInput | AssessmentUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutOrganisationNestedInput = {
    create?: XOR<TeamCreateWithoutOrganisationInput, TeamUncheckedCreateWithoutOrganisationInput> | TeamCreateWithoutOrganisationInput[] | TeamUncheckedCreateWithoutOrganisationInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOrganisationInput | TeamCreateOrConnectWithoutOrganisationInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutOrganisationInput | TeamUpsertWithWhereUniqueWithoutOrganisationInput[]
    createMany?: TeamCreateManyOrganisationInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutOrganisationInput | TeamUpdateWithWhereUniqueWithoutOrganisationInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutOrganisationInput | TeamUpdateManyWithWhereWithoutOrganisationInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type AssessmentQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AssessmentQuestionCreateWithoutQuestionInput, AssessmentQuestionUncheckedCreateWithoutQuestionInput> | AssessmentQuestionCreateWithoutQuestionInput[] | AssessmentQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutQuestionInput | AssessmentQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: AssessmentQuestionCreateManyQuestionInputEnvelope
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
  }

  export type AuestionAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AuestionAnswerCreateWithoutQuestionInput, AuestionAnswerUncheckedCreateWithoutQuestionInput> | AuestionAnswerCreateWithoutQuestionInput[] | AuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuestionAnswerCreateOrConnectWithoutQuestionInput | AuestionAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AuestionAnswerCreateManyQuestionInputEnvelope
    connect?: AuestionAnswerWhereUniqueInput | AuestionAnswerWhereUniqueInput[]
  }

  export type AssessmentQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AssessmentQuestionCreateWithoutQuestionInput, AssessmentQuestionUncheckedCreateWithoutQuestionInput> | AssessmentQuestionCreateWithoutQuestionInput[] | AssessmentQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutQuestionInput | AssessmentQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: AssessmentQuestionCreateManyQuestionInputEnvelope
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
  }

  export type AuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AuestionAnswerCreateWithoutQuestionInput, AuestionAnswerUncheckedCreateWithoutQuestionInput> | AuestionAnswerCreateWithoutQuestionInput[] | AuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuestionAnswerCreateOrConnectWithoutQuestionInput | AuestionAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AuestionAnswerCreateManyQuestionInputEnvelope
    connect?: AuestionAnswerWhereUniqueInput | AuestionAnswerWhereUniqueInput[]
  }

  export type NullableEnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType | null
  }

  export type AssessmentQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AssessmentQuestionCreateWithoutQuestionInput, AssessmentQuestionUncheckedCreateWithoutQuestionInput> | AssessmentQuestionCreateWithoutQuestionInput[] | AssessmentQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutQuestionInput | AssessmentQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: AssessmentQuestionUpsertWithWhereUniqueWithoutQuestionInput | AssessmentQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AssessmentQuestionCreateManyQuestionInputEnvelope
    set?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    disconnect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    delete?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    update?: AssessmentQuestionUpdateWithWhereUniqueWithoutQuestionInput | AssessmentQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AssessmentQuestionUpdateManyWithWhereWithoutQuestionInput | AssessmentQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AssessmentQuestionScalarWhereInput | AssessmentQuestionScalarWhereInput[]
  }

  export type AuestionAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AuestionAnswerCreateWithoutQuestionInput, AuestionAnswerUncheckedCreateWithoutQuestionInput> | AuestionAnswerCreateWithoutQuestionInput[] | AuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuestionAnswerCreateOrConnectWithoutQuestionInput | AuestionAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput | AuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AuestionAnswerCreateManyQuestionInputEnvelope
    set?: AuestionAnswerWhereUniqueInput | AuestionAnswerWhereUniqueInput[]
    disconnect?: AuestionAnswerWhereUniqueInput | AuestionAnswerWhereUniqueInput[]
    delete?: AuestionAnswerWhereUniqueInput | AuestionAnswerWhereUniqueInput[]
    connect?: AuestionAnswerWhereUniqueInput | AuestionAnswerWhereUniqueInput[]
    update?: AuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput | AuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AuestionAnswerUpdateManyWithWhereWithoutQuestionInput | AuestionAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AuestionAnswerScalarWhereInput | AuestionAnswerScalarWhereInput[]
  }

  export type AssessmentQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AssessmentQuestionCreateWithoutQuestionInput, AssessmentQuestionUncheckedCreateWithoutQuestionInput> | AssessmentQuestionCreateWithoutQuestionInput[] | AssessmentQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AssessmentQuestionCreateOrConnectWithoutQuestionInput | AssessmentQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: AssessmentQuestionUpsertWithWhereUniqueWithoutQuestionInput | AssessmentQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AssessmentQuestionCreateManyQuestionInputEnvelope
    set?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    disconnect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    delete?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    connect?: AssessmentQuestionWhereUniqueInput | AssessmentQuestionWhereUniqueInput[]
    update?: AssessmentQuestionUpdateWithWhereUniqueWithoutQuestionInput | AssessmentQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AssessmentQuestionUpdateManyWithWhereWithoutQuestionInput | AssessmentQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AssessmentQuestionScalarWhereInput | AssessmentQuestionScalarWhereInput[]
  }

  export type AuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AuestionAnswerCreateWithoutQuestionInput, AuestionAnswerUncheckedCreateWithoutQuestionInput> | AuestionAnswerCreateWithoutQuestionInput[] | AuestionAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AuestionAnswerCreateOrConnectWithoutQuestionInput | AuestionAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput | AuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AuestionAnswerCreateManyQuestionInputEnvelope
    set?: AuestionAnswerWhereUniqueInput | AuestionAnswerWhereUniqueInput[]
    disconnect?: AuestionAnswerWhereUniqueInput | AuestionAnswerWhereUniqueInput[]
    delete?: AuestionAnswerWhereUniqueInput | AuestionAnswerWhereUniqueInput[]
    connect?: AuestionAnswerWhereUniqueInput | AuestionAnswerWhereUniqueInput[]
    update?: AuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput | AuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AuestionAnswerUpdateManyWithWhereWithoutQuestionInput | AuestionAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AuestionAnswerScalarWhereInput | AuestionAnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAuestionAnswerInput = {
    create?: XOR<QuestionCreateWithoutAuestionAnswerInput, QuestionUncheckedCreateWithoutAuestionAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAuestionAnswerInput
    connect?: QuestionWhereUniqueInput
  }

  export type AssessmentQuestionAnswerCreateNestedManyWithoutAuestionAnswerInput = {
    create?: XOR<AssessmentQuestionAnswerCreateWithoutAuestionAnswerInput, AssessmentQuestionAnswerUncheckedCreateWithoutAuestionAnswerInput> | AssessmentQuestionAnswerCreateWithoutAuestionAnswerInput[] | AssessmentQuestionAnswerUncheckedCreateWithoutAuestionAnswerInput[]
    connectOrCreate?: AssessmentQuestionAnswerCreateOrConnectWithoutAuestionAnswerInput | AssessmentQuestionAnswerCreateOrConnectWithoutAuestionAnswerInput[]
    createMany?: AssessmentQuestionAnswerCreateManyAuestionAnswerInputEnvelope
    connect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
  }

  export type AssessmentQuestionAnswerUncheckedCreateNestedManyWithoutAuestionAnswerInput = {
    create?: XOR<AssessmentQuestionAnswerCreateWithoutAuestionAnswerInput, AssessmentQuestionAnswerUncheckedCreateWithoutAuestionAnswerInput> | AssessmentQuestionAnswerCreateWithoutAuestionAnswerInput[] | AssessmentQuestionAnswerUncheckedCreateWithoutAuestionAnswerInput[]
    connectOrCreate?: AssessmentQuestionAnswerCreateOrConnectWithoutAuestionAnswerInput | AssessmentQuestionAnswerCreateOrConnectWithoutAuestionAnswerInput[]
    createMany?: AssessmentQuestionAnswerCreateManyAuestionAnswerInputEnvelope
    connect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutAuestionAnswerNestedInput = {
    create?: XOR<QuestionCreateWithoutAuestionAnswerInput, QuestionUncheckedCreateWithoutAuestionAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAuestionAnswerInput
    upsert?: QuestionUpsertWithoutAuestionAnswerInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAuestionAnswerInput, QuestionUpdateWithoutAuestionAnswerInput>, QuestionUncheckedUpdateWithoutAuestionAnswerInput>
  }

  export type AssessmentQuestionAnswerUpdateManyWithoutAuestionAnswerNestedInput = {
    create?: XOR<AssessmentQuestionAnswerCreateWithoutAuestionAnswerInput, AssessmentQuestionAnswerUncheckedCreateWithoutAuestionAnswerInput> | AssessmentQuestionAnswerCreateWithoutAuestionAnswerInput[] | AssessmentQuestionAnswerUncheckedCreateWithoutAuestionAnswerInput[]
    connectOrCreate?: AssessmentQuestionAnswerCreateOrConnectWithoutAuestionAnswerInput | AssessmentQuestionAnswerCreateOrConnectWithoutAuestionAnswerInput[]
    upsert?: AssessmentQuestionAnswerUpsertWithWhereUniqueWithoutAuestionAnswerInput | AssessmentQuestionAnswerUpsertWithWhereUniqueWithoutAuestionAnswerInput[]
    createMany?: AssessmentQuestionAnswerCreateManyAuestionAnswerInputEnvelope
    set?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    disconnect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    delete?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    connect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    update?: AssessmentQuestionAnswerUpdateWithWhereUniqueWithoutAuestionAnswerInput | AssessmentQuestionAnswerUpdateWithWhereUniqueWithoutAuestionAnswerInput[]
    updateMany?: AssessmentQuestionAnswerUpdateManyWithWhereWithoutAuestionAnswerInput | AssessmentQuestionAnswerUpdateManyWithWhereWithoutAuestionAnswerInput[]
    deleteMany?: AssessmentQuestionAnswerScalarWhereInput | AssessmentQuestionAnswerScalarWhereInput[]
  }

  export type AssessmentQuestionAnswerUncheckedUpdateManyWithoutAuestionAnswerNestedInput = {
    create?: XOR<AssessmentQuestionAnswerCreateWithoutAuestionAnswerInput, AssessmentQuestionAnswerUncheckedCreateWithoutAuestionAnswerInput> | AssessmentQuestionAnswerCreateWithoutAuestionAnswerInput[] | AssessmentQuestionAnswerUncheckedCreateWithoutAuestionAnswerInput[]
    connectOrCreate?: AssessmentQuestionAnswerCreateOrConnectWithoutAuestionAnswerInput | AssessmentQuestionAnswerCreateOrConnectWithoutAuestionAnswerInput[]
    upsert?: AssessmentQuestionAnswerUpsertWithWhereUniqueWithoutAuestionAnswerInput | AssessmentQuestionAnswerUpsertWithWhereUniqueWithoutAuestionAnswerInput[]
    createMany?: AssessmentQuestionAnswerCreateManyAuestionAnswerInputEnvelope
    set?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    disconnect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    delete?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    connect?: AssessmentQuestionAnswerWhereUniqueInput | AssessmentQuestionAnswerWhereUniqueInput[]
    update?: AssessmentQuestionAnswerUpdateWithWhereUniqueWithoutAuestionAnswerInput | AssessmentQuestionAnswerUpdateWithWhereUniqueWithoutAuestionAnswerInput[]
    updateMany?: AssessmentQuestionAnswerUpdateManyWithWhereWithoutAuestionAnswerInput | AssessmentQuestionAnswerUpdateManyWithWhereWithoutAuestionAnswerInput[]
    deleteMany?: AssessmentQuestionAnswerScalarWhereInput | AssessmentQuestionAnswerScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type OrganisationCreateNestedOneWithoutTeamInput = {
    create?: XOR<OrganisationCreateWithoutTeamInput, OrganisationUncheckedCreateWithoutTeamInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutTeamInput
    connect?: OrganisationWhereUniqueInput
  }

  export type AssessmentAssignCreateNestedManyWithoutTeamInput = {
    create?: XOR<AssessmentAssignCreateWithoutTeamInput, AssessmentAssignUncheckedCreateWithoutTeamInput> | AssessmentAssignCreateWithoutTeamInput[] | AssessmentAssignUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutTeamInput | AssessmentAssignCreateOrConnectWithoutTeamInput[]
    createMany?: AssessmentAssignCreateManyTeamInputEnvelope
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
  }

  export type AssessmentQuestionAssignCreateNestedManyWithoutTeamInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutTeamInput, AssessmentQuestionAssignUncheckedCreateWithoutTeamInput> | AssessmentQuestionAssignCreateWithoutTeamInput[] | AssessmentQuestionAssignUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutTeamInput | AssessmentQuestionAssignCreateOrConnectWithoutTeamInput[]
    createMany?: AssessmentQuestionAssignCreateManyTeamInputEnvelope
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
  }

  export type AssessmentAssignUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<AssessmentAssignCreateWithoutTeamInput, AssessmentAssignUncheckedCreateWithoutTeamInput> | AssessmentAssignCreateWithoutTeamInput[] | AssessmentAssignUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutTeamInput | AssessmentAssignCreateOrConnectWithoutTeamInput[]
    createMany?: AssessmentAssignCreateManyTeamInputEnvelope
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
  }

  export type AssessmentQuestionAssignUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutTeamInput, AssessmentQuestionAssignUncheckedCreateWithoutTeamInput> | AssessmentQuestionAssignCreateWithoutTeamInput[] | AssessmentQuestionAssignUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutTeamInput | AssessmentQuestionAssignCreateOrConnectWithoutTeamInput[]
    createMany?: AssessmentQuestionAssignCreateManyTeamInputEnvelope
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
  }

  export type OrganisationUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<OrganisationCreateWithoutTeamInput, OrganisationUncheckedCreateWithoutTeamInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutTeamInput
    upsert?: OrganisationUpsertWithoutTeamInput
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutTeamInput, OrganisationUpdateWithoutTeamInput>, OrganisationUncheckedUpdateWithoutTeamInput>
  }

  export type AssessmentAssignUpdateManyWithoutTeamNestedInput = {
    create?: XOR<AssessmentAssignCreateWithoutTeamInput, AssessmentAssignUncheckedCreateWithoutTeamInput> | AssessmentAssignCreateWithoutTeamInput[] | AssessmentAssignUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutTeamInput | AssessmentAssignCreateOrConnectWithoutTeamInput[]
    upsert?: AssessmentAssignUpsertWithWhereUniqueWithoutTeamInput | AssessmentAssignUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: AssessmentAssignCreateManyTeamInputEnvelope
    set?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    disconnect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    delete?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    update?: AssessmentAssignUpdateWithWhereUniqueWithoutTeamInput | AssessmentAssignUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: AssessmentAssignUpdateManyWithWhereWithoutTeamInput | AssessmentAssignUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: AssessmentAssignScalarWhereInput | AssessmentAssignScalarWhereInput[]
  }

  export type AssessmentQuestionAssignUpdateManyWithoutTeamNestedInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutTeamInput, AssessmentQuestionAssignUncheckedCreateWithoutTeamInput> | AssessmentQuestionAssignCreateWithoutTeamInput[] | AssessmentQuestionAssignUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutTeamInput | AssessmentQuestionAssignCreateOrConnectWithoutTeamInput[]
    upsert?: AssessmentQuestionAssignUpsertWithWhereUniqueWithoutTeamInput | AssessmentQuestionAssignUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: AssessmentQuestionAssignCreateManyTeamInputEnvelope
    set?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    disconnect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    delete?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    update?: AssessmentQuestionAssignUpdateWithWhereUniqueWithoutTeamInput | AssessmentQuestionAssignUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: AssessmentQuestionAssignUpdateManyWithWhereWithoutTeamInput | AssessmentQuestionAssignUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
  }

  export type AssessmentAssignUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<AssessmentAssignCreateWithoutTeamInput, AssessmentAssignUncheckedCreateWithoutTeamInput> | AssessmentAssignCreateWithoutTeamInput[] | AssessmentAssignUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutTeamInput | AssessmentAssignCreateOrConnectWithoutTeamInput[]
    upsert?: AssessmentAssignUpsertWithWhereUniqueWithoutTeamInput | AssessmentAssignUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: AssessmentAssignCreateManyTeamInputEnvelope
    set?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    disconnect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    delete?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    update?: AssessmentAssignUpdateWithWhereUniqueWithoutTeamInput | AssessmentAssignUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: AssessmentAssignUpdateManyWithWhereWithoutTeamInput | AssessmentAssignUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: AssessmentAssignScalarWhereInput | AssessmentAssignScalarWhereInput[]
  }

  export type AssessmentQuestionAssignUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutTeamInput, AssessmentQuestionAssignUncheckedCreateWithoutTeamInput> | AssessmentQuestionAssignCreateWithoutTeamInput[] | AssessmentQuestionAssignUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutTeamInput | AssessmentQuestionAssignCreateOrConnectWithoutTeamInput[]
    upsert?: AssessmentQuestionAssignUpsertWithWhereUniqueWithoutTeamInput | AssessmentQuestionAssignUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: AssessmentQuestionAssignCreateManyTeamInputEnvelope
    set?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    disconnect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    delete?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    update?: AssessmentQuestionAssignUpdateWithWhereUniqueWithoutTeamInput | AssessmentQuestionAssignUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: AssessmentQuestionAssignUpdateManyWithWhereWithoutTeamInput | AssessmentQuestionAssignUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeamMemberInput = {
    create?: XOR<UserCreateWithoutTeamMemberInput, UserUncheckedCreateWithoutTeamMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMemberInput
    connect?: UserWhereUniqueInput
  }

  export type AssessmentAssignCreateNestedManyWithoutMemberInput = {
    create?: XOR<AssessmentAssignCreateWithoutMemberInput, AssessmentAssignUncheckedCreateWithoutMemberInput> | AssessmentAssignCreateWithoutMemberInput[] | AssessmentAssignUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutMemberInput | AssessmentAssignCreateOrConnectWithoutMemberInput[]
    createMany?: AssessmentAssignCreateManyMemberInputEnvelope
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
  }

  export type AssessmentQuestionAssignCreateNestedManyWithoutMemberInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutMemberInput, AssessmentQuestionAssignUncheckedCreateWithoutMemberInput> | AssessmentQuestionAssignCreateWithoutMemberInput[] | AssessmentQuestionAssignUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutMemberInput | AssessmentQuestionAssignCreateOrConnectWithoutMemberInput[]
    createMany?: AssessmentQuestionAssignCreateManyMemberInputEnvelope
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
  }

  export type AssessmentAssignUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<AssessmentAssignCreateWithoutMemberInput, AssessmentAssignUncheckedCreateWithoutMemberInput> | AssessmentAssignCreateWithoutMemberInput[] | AssessmentAssignUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutMemberInput | AssessmentAssignCreateOrConnectWithoutMemberInput[]
    createMany?: AssessmentAssignCreateManyMemberInputEnvelope
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
  }

  export type AssessmentQuestionAssignUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutMemberInput, AssessmentQuestionAssignUncheckedCreateWithoutMemberInput> | AssessmentQuestionAssignCreateWithoutMemberInput[] | AssessmentQuestionAssignUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutMemberInput | AssessmentQuestionAssignCreateOrConnectWithoutMemberInput[]
    createMany?: AssessmentQuestionAssignCreateManyMemberInputEnvelope
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
  }

  export type EnumTeamMemberLevelFieldUpdateOperationsInput = {
    set?: $Enums.TeamMemberLevel
  }

  export type UserUpdateOneRequiredWithoutTeamMemberNestedInput = {
    create?: XOR<UserCreateWithoutTeamMemberInput, UserUncheckedCreateWithoutTeamMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMemberInput
    upsert?: UserUpsertWithoutTeamMemberInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamMemberInput, UserUpdateWithoutTeamMemberInput>, UserUncheckedUpdateWithoutTeamMemberInput>
  }

  export type AssessmentAssignUpdateManyWithoutMemberNestedInput = {
    create?: XOR<AssessmentAssignCreateWithoutMemberInput, AssessmentAssignUncheckedCreateWithoutMemberInput> | AssessmentAssignCreateWithoutMemberInput[] | AssessmentAssignUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutMemberInput | AssessmentAssignCreateOrConnectWithoutMemberInput[]
    upsert?: AssessmentAssignUpsertWithWhereUniqueWithoutMemberInput | AssessmentAssignUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: AssessmentAssignCreateManyMemberInputEnvelope
    set?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    disconnect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    delete?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    update?: AssessmentAssignUpdateWithWhereUniqueWithoutMemberInput | AssessmentAssignUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: AssessmentAssignUpdateManyWithWhereWithoutMemberInput | AssessmentAssignUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: AssessmentAssignScalarWhereInput | AssessmentAssignScalarWhereInput[]
  }

  export type AssessmentQuestionAssignUpdateManyWithoutMemberNestedInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutMemberInput, AssessmentQuestionAssignUncheckedCreateWithoutMemberInput> | AssessmentQuestionAssignCreateWithoutMemberInput[] | AssessmentQuestionAssignUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutMemberInput | AssessmentQuestionAssignCreateOrConnectWithoutMemberInput[]
    upsert?: AssessmentQuestionAssignUpsertWithWhereUniqueWithoutMemberInput | AssessmentQuestionAssignUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: AssessmentQuestionAssignCreateManyMemberInputEnvelope
    set?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    disconnect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    delete?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    update?: AssessmentQuestionAssignUpdateWithWhereUniqueWithoutMemberInput | AssessmentQuestionAssignUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: AssessmentQuestionAssignUpdateManyWithWhereWithoutMemberInput | AssessmentQuestionAssignUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
  }

  export type AssessmentAssignUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<AssessmentAssignCreateWithoutMemberInput, AssessmentAssignUncheckedCreateWithoutMemberInput> | AssessmentAssignCreateWithoutMemberInput[] | AssessmentAssignUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AssessmentAssignCreateOrConnectWithoutMemberInput | AssessmentAssignCreateOrConnectWithoutMemberInput[]
    upsert?: AssessmentAssignUpsertWithWhereUniqueWithoutMemberInput | AssessmentAssignUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: AssessmentAssignCreateManyMemberInputEnvelope
    set?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    disconnect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    delete?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    connect?: AssessmentAssignWhereUniqueInput | AssessmentAssignWhereUniqueInput[]
    update?: AssessmentAssignUpdateWithWhereUniqueWithoutMemberInput | AssessmentAssignUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: AssessmentAssignUpdateManyWithWhereWithoutMemberInput | AssessmentAssignUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: AssessmentAssignScalarWhereInput | AssessmentAssignScalarWhereInput[]
  }

  export type AssessmentQuestionAssignUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<AssessmentQuestionAssignCreateWithoutMemberInput, AssessmentQuestionAssignUncheckedCreateWithoutMemberInput> | AssessmentQuestionAssignCreateWithoutMemberInput[] | AssessmentQuestionAssignUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: AssessmentQuestionAssignCreateOrConnectWithoutMemberInput | AssessmentQuestionAssignCreateOrConnectWithoutMemberInput[]
    upsert?: AssessmentQuestionAssignUpsertWithWhereUniqueWithoutMemberInput | AssessmentQuestionAssignUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: AssessmentQuestionAssignCreateManyMemberInputEnvelope
    set?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    disconnect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    delete?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    connect?: AssessmentQuestionAssignWhereUniqueInput | AssessmentQuestionAssignWhereUniqueInput[]
    update?: AssessmentQuestionAssignUpdateWithWhereUniqueWithoutMemberInput | AssessmentQuestionAssignUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: AssessmentQuestionAssignUpdateManyWithWhereWithoutMemberInput | AssessmentQuestionAssignUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
  }

  export type OrganisationCreateNestedOneWithoutOwnerInput = {
    create?: XOR<OrganisationCreateWithoutOwnerInput, OrganisationUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutOwnerInput
    connect?: OrganisationWhereUniqueInput
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type TeamMemberCreateNestedManyWithoutMemberInput = {
    create?: XOR<TeamMemberCreateWithoutMemberInput, TeamMemberUncheckedCreateWithoutMemberInput> | TeamMemberCreateWithoutMemberInput[] | TeamMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutMemberInput | TeamMemberCreateOrConnectWithoutMemberInput[]
    createMany?: TeamMemberCreateManyMemberInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type OrganisationUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: XOR<OrganisationCreateWithoutOwnerInput, OrganisationUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutOwnerInput
    connect?: OrganisationWhereUniqueInput
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<TeamMemberCreateWithoutMemberInput, TeamMemberUncheckedCreateWithoutMemberInput> | TeamMemberCreateWithoutMemberInput[] | TeamMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutMemberInput | TeamMemberCreateOrConnectWithoutMemberInput[]
    createMany?: TeamMemberCreateManyMemberInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrganisationUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<OrganisationCreateWithoutOwnerInput, OrganisationUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutOwnerInput
    upsert?: OrganisationUpsertWithoutOwnerInput
    disconnect?: OrganisationWhereInput | boolean
    delete?: OrganisationWhereInput | boolean
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutOwnerInput, OrganisationUpdateWithoutOwnerInput>, OrganisationUncheckedUpdateWithoutOwnerInput>
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type TeamMemberUpdateManyWithoutMemberNestedInput = {
    create?: XOR<TeamMemberCreateWithoutMemberInput, TeamMemberUncheckedCreateWithoutMemberInput> | TeamMemberCreateWithoutMemberInput[] | TeamMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutMemberInput | TeamMemberCreateOrConnectWithoutMemberInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutMemberInput | TeamMemberUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: TeamMemberCreateManyMemberInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutMemberInput | TeamMemberUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutMemberInput | TeamMemberUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type OrganisationUncheckedUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<OrganisationCreateWithoutOwnerInput, OrganisationUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: OrganisationCreateOrConnectWithoutOwnerInput
    upsert?: OrganisationUpsertWithoutOwnerInput
    disconnect?: OrganisationWhereInput | boolean
    delete?: OrganisationWhereInput | boolean
    connect?: OrganisationWhereUniqueInput
    update?: XOR<XOR<OrganisationUpdateToOneWithWhereWithoutOwnerInput, OrganisationUpdateWithoutOwnerInput>, OrganisationUncheckedUpdateWithoutOwnerInput>
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<TeamMemberCreateWithoutMemberInput, TeamMemberUncheckedCreateWithoutMemberInput> | TeamMemberCreateWithoutMemberInput[] | TeamMemberUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutMemberInput | TeamMemberCreateOrConnectWithoutMemberInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutMemberInput | TeamMemberUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: TeamMemberCreateManyMemberInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutMemberInput | TeamMemberUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutMemberInput | TeamMemberUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserRoleInput = {
    create?: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRoleInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput
    upsert?: UserUpsertWithoutUserRoleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRoleInput, UserUpdateWithoutUserRoleInput>, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type RoleUpdateOneRequiredWithoutUserRoleNestedInput = {
    create?: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserRoleInput
    upsert?: RoleUpsertWithoutUserRoleInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserRoleInput, RoleUpdateWithoutUserRoleInput>, RoleUncheckedUpdateWithoutUserRoleInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumQuestionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.QuestionType[] | null
    notIn?: $Enums.QuestionType[] | null
    not?: NestedEnumQuestionTypeNullableFilter<$PrismaModel> | $Enums.QuestionType | null
  }

  export type NestedEnumQuestionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.QuestionType[] | null
    notIn?: $Enums.QuestionType[] | null
    not?: NestedEnumQuestionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTeamMemberLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberLevel | EnumTeamMemberLevelFieldRefInput<$PrismaModel>
    in?: $Enums.TeamMemberLevel[]
    notIn?: $Enums.TeamMemberLevel[]
    not?: NestedEnumTeamMemberLevelFilter<$PrismaModel> | $Enums.TeamMemberLevel
  }

  export type NestedEnumTeamMemberLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberLevel | EnumTeamMemberLevelFieldRefInput<$PrismaModel>
    in?: $Enums.TeamMemberLevel[]
    notIn?: $Enums.TeamMemberLevel[]
    not?: NestedEnumTeamMemberLevelWithAggregatesFilter<$PrismaModel> | $Enums.TeamMemberLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamMemberLevelFilter<$PrismaModel>
    _max?: NestedEnumTeamMemberLevelFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrganisationCreateWithoutAssessmentInput = {
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Owner: UserCreateNestedOneWithoutOrganisationInput
    Team?: TeamCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationUncheckedCreateWithoutAssessmentInput = {
    id?: number
    name: string
    description: string
    isActive?: boolean
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Team?: TeamUncheckedCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationCreateOrConnectWithoutAssessmentInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutAssessmentInput, OrganisationUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentAssignCreateWithoutAssessmentInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Team: TeamCreateNestedOneWithoutAssessmentAssignInput
    Member: TeamMemberCreateNestedOneWithoutAssessmentAssignInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutAssessmentAssignInput
  }

  export type AssessmentAssignUncheckedCreateWithoutAssessmentInput = {
    id?: number
    teamId: number
    memberId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentAssignInput
  }

  export type AssessmentAssignCreateOrConnectWithoutAssessmentInput = {
    where: AssessmentAssignWhereUniqueInput
    create: XOR<AssessmentAssignCreateWithoutAssessmentInput, AssessmentAssignUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentAssignCreateManyAssessmentInputEnvelope = {
    data: AssessmentAssignCreateManyAssessmentInput | AssessmentAssignCreateManyAssessmentInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentQuestionAssignCreateWithoutAssessmentInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Team: TeamCreateNestedOneWithoutAssessmentQuestionAssignInput
    Member: TeamMemberCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestion: AssessmentQuestionCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentAssign: AssessmentAssignCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignUncheckedCreateWithoutAssessmentInput = {
    id?: number
    teamId: number
    memberId: number
    assessmentQuestionId: number
    assessmentAssignId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignCreateOrConnectWithoutAssessmentInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    create: XOR<AssessmentQuestionAssignCreateWithoutAssessmentInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentQuestionAssignCreateManyAssessmentInputEnvelope = {
    data: AssessmentQuestionAssignCreateManyAssessmentInput | AssessmentQuestionAssignCreateManyAssessmentInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentQuestionCreateWithoutAssessmentInput = {
    questionId_: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Question: QuestionCreateNestedOneWithoutAssessmentQuestionInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutAssessmentQuestionInput
  }

  export type AssessmentQuestionUncheckedCreateWithoutAssessmentInput = {
    id?: number
    questionId_: number
    questionId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentQuestionInput
  }

  export type AssessmentQuestionCreateOrConnectWithoutAssessmentInput = {
    where: AssessmentQuestionWhereUniqueInput
    create: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentQuestionCreateManyAssessmentInputEnvelope = {
    data: AssessmentQuestionCreateManyAssessmentInput | AssessmentQuestionCreateManyAssessmentInput[]
    skipDuplicates?: boolean
  }

  export type OrganisationUpsertWithoutAssessmentInput = {
    update: XOR<OrganisationUpdateWithoutAssessmentInput, OrganisationUncheckedUpdateWithoutAssessmentInput>
    create: XOR<OrganisationCreateWithoutAssessmentInput, OrganisationUncheckedCreateWithoutAssessmentInput>
    where?: OrganisationWhereInput
  }

  export type OrganisationUpdateToOneWithWhereWithoutAssessmentInput = {
    where?: OrganisationWhereInput
    data: XOR<OrganisationUpdateWithoutAssessmentInput, OrganisationUncheckedUpdateWithoutAssessmentInput>
  }

  export type OrganisationUpdateWithoutAssessmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Owner?: UserUpdateOneRequiredWithoutOrganisationNestedInput
    Team?: TeamUpdateManyWithoutOrganisationNestedInput
  }

  export type OrganisationUncheckedUpdateWithoutAssessmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Team?: TeamUncheckedUpdateManyWithoutOrganisationNestedInput
  }

  export type AssessmentAssignUpsertWithWhereUniqueWithoutAssessmentInput = {
    where: AssessmentAssignWhereUniqueInput
    update: XOR<AssessmentAssignUpdateWithoutAssessmentInput, AssessmentAssignUncheckedUpdateWithoutAssessmentInput>
    create: XOR<AssessmentAssignCreateWithoutAssessmentInput, AssessmentAssignUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentAssignUpdateWithWhereUniqueWithoutAssessmentInput = {
    where: AssessmentAssignWhereUniqueInput
    data: XOR<AssessmentAssignUpdateWithoutAssessmentInput, AssessmentAssignUncheckedUpdateWithoutAssessmentInput>
  }

  export type AssessmentAssignUpdateManyWithWhereWithoutAssessmentInput = {
    where: AssessmentAssignScalarWhereInput
    data: XOR<AssessmentAssignUpdateManyMutationInput, AssessmentAssignUncheckedUpdateManyWithoutAssessmentInput>
  }

  export type AssessmentAssignScalarWhereInput = {
    AND?: AssessmentAssignScalarWhereInput | AssessmentAssignScalarWhereInput[]
    OR?: AssessmentAssignScalarWhereInput[]
    NOT?: AssessmentAssignScalarWhereInput | AssessmentAssignScalarWhereInput[]
    id?: IntFilter<"AssessmentAssign"> | number
    assessmentId?: IntFilter<"AssessmentAssign"> | number
    teamId?: IntFilter<"AssessmentAssign"> | number
    memberId?: IntFilter<"AssessmentAssign"> | number
    password?: StringNullableFilter<"AssessmentAssign"> | string | null
    rememberToken?: StringNullableFilter<"AssessmentAssign"> | string | null
    isActive?: BoolFilter<"AssessmentAssign"> | boolean
    secretToken?: StringNullableFilter<"AssessmentAssign"> | string | null
    tfaToken?: StringNullableFilter<"AssessmentAssign"> | string | null
    createdAt?: DateTimeFilter<"AssessmentAssign"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentAssign"> | Date | string
  }

  export type AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    update: XOR<AssessmentQuestionAssignUpdateWithoutAssessmentInput, AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentInput>
    create: XOR<AssessmentQuestionAssignCreateWithoutAssessmentInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    data: XOR<AssessmentQuestionAssignUpdateWithoutAssessmentInput, AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentInput>
  }

  export type AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentInput = {
    where: AssessmentQuestionAssignScalarWhereInput
    data: XOR<AssessmentQuestionAssignUpdateManyMutationInput, AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentInput>
  }

  export type AssessmentQuestionAssignScalarWhereInput = {
    AND?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
    OR?: AssessmentQuestionAssignScalarWhereInput[]
    NOT?: AssessmentQuestionAssignScalarWhereInput | AssessmentQuestionAssignScalarWhereInput[]
    id?: IntFilter<"AssessmentQuestionAssign"> | number
    assessmentId?: IntFilter<"AssessmentQuestionAssign"> | number
    teamId?: IntFilter<"AssessmentQuestionAssign"> | number
    memberId?: IntFilter<"AssessmentQuestionAssign"> | number
    assessmentQuestionId?: IntFilter<"AssessmentQuestionAssign"> | number
    assessmentAssignId?: IntFilter<"AssessmentQuestionAssign"> | number
    password?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    rememberToken?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    isActive?: BoolFilter<"AssessmentQuestionAssign"> | boolean
    secretToken?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    tfaToken?: StringNullableFilter<"AssessmentQuestionAssign"> | string | null
    createdAt?: DateTimeFilter<"AssessmentQuestionAssign"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestionAssign"> | Date | string
  }

  export type AssessmentQuestionUpsertWithWhereUniqueWithoutAssessmentInput = {
    where: AssessmentQuestionWhereUniqueInput
    update: XOR<AssessmentQuestionUpdateWithoutAssessmentInput, AssessmentQuestionUncheckedUpdateWithoutAssessmentInput>
    create: XOR<AssessmentQuestionCreateWithoutAssessmentInput, AssessmentQuestionUncheckedCreateWithoutAssessmentInput>
  }

  export type AssessmentQuestionUpdateWithWhereUniqueWithoutAssessmentInput = {
    where: AssessmentQuestionWhereUniqueInput
    data: XOR<AssessmentQuestionUpdateWithoutAssessmentInput, AssessmentQuestionUncheckedUpdateWithoutAssessmentInput>
  }

  export type AssessmentQuestionUpdateManyWithWhereWithoutAssessmentInput = {
    where: AssessmentQuestionScalarWhereInput
    data: XOR<AssessmentQuestionUpdateManyMutationInput, AssessmentQuestionUncheckedUpdateManyWithoutAssessmentInput>
  }

  export type AssessmentQuestionScalarWhereInput = {
    AND?: AssessmentQuestionScalarWhereInput | AssessmentQuestionScalarWhereInput[]
    OR?: AssessmentQuestionScalarWhereInput[]
    NOT?: AssessmentQuestionScalarWhereInput | AssessmentQuestionScalarWhereInput[]
    id?: IntFilter<"AssessmentQuestion"> | number
    assessmentId?: IntFilter<"AssessmentQuestion"> | number
    questionId_?: IntFilter<"AssessmentQuestion"> | number
    questionId?: IntFilter<"AssessmentQuestion"> | number
    isActive?: BoolFilter<"AssessmentQuestion"> | boolean
    createdAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestion"> | Date | string
  }

  export type AssessmentCreateWithoutAssessmentAssignInput = {
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation: OrganisationCreateNestedOneWithoutAssessmentInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutAssessmentInput
    AssessmentQuestion?: AssessmentQuestionCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutAssessmentAssignInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    organisationId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentInput
    AssessmentQuestion?: AssessmentQuestionUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutAssessmentAssignInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutAssessmentAssignInput, AssessmentUncheckedCreateWithoutAssessmentAssignInput>
  }

  export type TeamCreateWithoutAssessmentAssignInput = {
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation: OrganisationCreateNestedOneWithoutTeamInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutAssessmentAssignInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    organisationId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutAssessmentAssignInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAssessmentAssignInput, TeamUncheckedCreateWithoutAssessmentAssignInput>
  }

  export type TeamMemberCreateWithoutAssessmentAssignInput = {
    Level?: $Enums.TeamMemberLevel
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Member: UserCreateNestedOneWithoutTeamMemberInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutMemberInput
  }

  export type TeamMemberUncheckedCreateWithoutAssessmentAssignInput = {
    id?: number
    memberId: number
    Level?: $Enums.TeamMemberLevel
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutMemberInput
  }

  export type TeamMemberCreateOrConnectWithoutAssessmentAssignInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutAssessmentAssignInput, TeamMemberUncheckedCreateWithoutAssessmentAssignInput>
  }

  export type AssessmentQuestionAssignCreateWithoutAssessmentAssignInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentQuestionAssignInput
    Team: TeamCreateNestedOneWithoutAssessmentQuestionAssignInput
    Member: TeamMemberCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestion: AssessmentQuestionCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignUncheckedCreateWithoutAssessmentAssignInput = {
    id?: number
    assessmentId: number
    teamId: number
    memberId: number
    assessmentQuestionId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignCreateOrConnectWithoutAssessmentAssignInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    create: XOR<AssessmentQuestionAssignCreateWithoutAssessmentAssignInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentAssignInput>
  }

  export type AssessmentQuestionAssignCreateManyAssessmentAssignInputEnvelope = {
    data: AssessmentQuestionAssignCreateManyAssessmentAssignInput | AssessmentQuestionAssignCreateManyAssessmentAssignInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentUpsertWithoutAssessmentAssignInput = {
    update: XOR<AssessmentUpdateWithoutAssessmentAssignInput, AssessmentUncheckedUpdateWithoutAssessmentAssignInput>
    create: XOR<AssessmentCreateWithoutAssessmentAssignInput, AssessmentUncheckedCreateWithoutAssessmentAssignInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutAssessmentAssignInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutAssessmentAssignInput, AssessmentUncheckedUpdateWithoutAssessmentAssignInput>
  }

  export type AssessmentUpdateWithoutAssessmentAssignInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUpdateOneRequiredWithoutAssessmentNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestion?: AssessmentQuestionUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutAssessmentAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestion?: AssessmentQuestionUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type TeamUpsertWithoutAssessmentAssignInput = {
    update: XOR<TeamUpdateWithoutAssessmentAssignInput, TeamUncheckedUpdateWithoutAssessmentAssignInput>
    create: XOR<TeamCreateWithoutAssessmentAssignInput, TeamUncheckedCreateWithoutAssessmentAssignInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutAssessmentAssignInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutAssessmentAssignInput, TeamUncheckedUpdateWithoutAssessmentAssignInput>
  }

  export type TeamUpdateWithoutAssessmentAssignInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUpdateOneRequiredWithoutTeamNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutAssessmentAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamMemberUpsertWithoutAssessmentAssignInput = {
    update: XOR<TeamMemberUpdateWithoutAssessmentAssignInput, TeamMemberUncheckedUpdateWithoutAssessmentAssignInput>
    create: XOR<TeamMemberCreateWithoutAssessmentAssignInput, TeamMemberUncheckedCreateWithoutAssessmentAssignInput>
    where?: TeamMemberWhereInput
  }

  export type TeamMemberUpdateToOneWithWhereWithoutAssessmentAssignInput = {
    where?: TeamMemberWhereInput
    data: XOR<TeamMemberUpdateWithoutAssessmentAssignInput, TeamMemberUncheckedUpdateWithoutAssessmentAssignInput>
  }

  export type TeamMemberUpdateWithoutAssessmentAssignInput = {
    Level?: EnumTeamMemberLevelFieldUpdateOperationsInput | $Enums.TeamMemberLevel
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Member?: UserUpdateOneRequiredWithoutTeamMemberNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutMemberNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutAssessmentAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    Level?: EnumTeamMemberLevelFieldUpdateOperationsInput | $Enums.TeamMemberLevel
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentAssignInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    update: XOR<AssessmentQuestionAssignUpdateWithoutAssessmentAssignInput, AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentAssignInput>
    create: XOR<AssessmentQuestionAssignCreateWithoutAssessmentAssignInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentAssignInput>
  }

  export type AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentAssignInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    data: XOR<AssessmentQuestionAssignUpdateWithoutAssessmentAssignInput, AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentAssignInput>
  }

  export type AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentAssignInput = {
    where: AssessmentQuestionAssignScalarWhereInput
    data: XOR<AssessmentQuestionAssignUpdateManyMutationInput, AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentAssignInput>
  }

  export type AssessmentCreateWithoutAssessmentQuestionInput = {
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation: OrganisationCreateNestedOneWithoutAssessmentInput
    AssessmentAssign?: AssessmentAssignCreateNestedManyWithoutAssessmentInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutAssessmentQuestionInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    organisationId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignUncheckedCreateNestedManyWithoutAssessmentInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutAssessmentQuestionInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutAssessmentQuestionInput, AssessmentUncheckedCreateWithoutAssessmentQuestionInput>
  }

  export type QuestionCreateWithoutAssessmentQuestionInput = {
    name: string
    description?: string | null
    questionType?: $Enums.QuestionType | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AuestionAnswer?: AuestionAnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAssessmentQuestionInput = {
    id?: number
    name: string
    description?: string | null
    questionType?: $Enums.QuestionType | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AuestionAnswer?: AuestionAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAssessmentQuestionInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAssessmentQuestionInput, QuestionUncheckedCreateWithoutAssessmentQuestionInput>
  }

  export type AssessmentQuestionAssignCreateWithoutAssessmentQuestionInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentQuestionAssignInput
    Team: TeamCreateNestedOneWithoutAssessmentQuestionAssignInput
    Member: TeamMemberCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentAssign: AssessmentAssignCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionInput = {
    id?: number
    assessmentId: number
    teamId: number
    memberId: number
    assessmentAssignId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    create: XOR<AssessmentQuestionAssignCreateWithoutAssessmentQuestionInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionInput>
  }

  export type AssessmentQuestionAssignCreateManyAssessmentQuestionInputEnvelope = {
    data: AssessmentQuestionAssignCreateManyAssessmentQuestionInput | AssessmentQuestionAssignCreateManyAssessmentQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentUpsertWithoutAssessmentQuestionInput = {
    update: XOR<AssessmentUpdateWithoutAssessmentQuestionInput, AssessmentUncheckedUpdateWithoutAssessmentQuestionInput>
    create: XOR<AssessmentCreateWithoutAssessmentQuestionInput, AssessmentUncheckedCreateWithoutAssessmentQuestionInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutAssessmentQuestionInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutAssessmentQuestionInput, AssessmentUncheckedUpdateWithoutAssessmentQuestionInput>
  }

  export type AssessmentUpdateWithoutAssessmentQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUpdateOneRequiredWithoutAssessmentNestedInput
    AssessmentAssign?: AssessmentAssignUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutAssessmentQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUncheckedUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type QuestionUpsertWithoutAssessmentQuestionInput = {
    update: XOR<QuestionUpdateWithoutAssessmentQuestionInput, QuestionUncheckedUpdateWithoutAssessmentQuestionInput>
    create: XOR<QuestionCreateWithoutAssessmentQuestionInput, QuestionUncheckedCreateWithoutAssessmentQuestionInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAssessmentQuestionInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAssessmentQuestionInput, QuestionUncheckedUpdateWithoutAssessmentQuestionInput>
  }

  export type QuestionUpdateWithoutAssessmentQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AuestionAnswer?: AuestionAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAssessmentQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AuestionAnswer?: AuestionAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AssessmentQuestionAssignUpsertWithWhereUniqueWithoutAssessmentQuestionInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    update: XOR<AssessmentQuestionAssignUpdateWithoutAssessmentQuestionInput, AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentQuestionInput>
    create: XOR<AssessmentQuestionAssignCreateWithoutAssessmentQuestionInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionInput>
  }

  export type AssessmentQuestionAssignUpdateWithWhereUniqueWithoutAssessmentQuestionInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    data: XOR<AssessmentQuestionAssignUpdateWithoutAssessmentQuestionInput, AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentQuestionInput>
  }

  export type AssessmentQuestionAssignUpdateManyWithWhereWithoutAssessmentQuestionInput = {
    where: AssessmentQuestionAssignScalarWhereInput
    data: XOR<AssessmentQuestionAssignUpdateManyMutationInput, AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentQuestionInput>
  }

  export type AssessmentQuestionAssignCreateWithoutAssessmentQuestionAnswerInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentQuestionAssignInput
    Team: TeamCreateNestedOneWithoutAssessmentQuestionAssignInput
    Member: TeamMemberCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestion: AssessmentQuestionCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentAssign: AssessmentAssignCreateNestedOneWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionAnswerInput = {
    id?: number
    assessmentId: number
    teamId: number
    memberId: number
    assessmentQuestionId: number
    assessmentAssignId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAssignCreateOrConnectWithoutAssessmentQuestionAnswerInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    create: XOR<AssessmentQuestionAssignCreateWithoutAssessmentQuestionAnswerInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionAnswerInput>
  }

  export type AuestionAnswerCreateWithoutAssessmentQuestionAnswerInput = {
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Question: QuestionCreateNestedOneWithoutAuestionAnswerInput
  }

  export type AuestionAnswerUncheckedCreateWithoutAssessmentQuestionAnswerInput = {
    id?: number
    name: string
    description?: string | null
    questionId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuestionAnswerCreateOrConnectWithoutAssessmentQuestionAnswerInput = {
    where: AuestionAnswerWhereUniqueInput
    create: XOR<AuestionAnswerCreateWithoutAssessmentQuestionAnswerInput, AuestionAnswerUncheckedCreateWithoutAssessmentQuestionAnswerInput>
  }

  export type AssessmentQuestionAssignUpsertWithoutAssessmentQuestionAnswerInput = {
    update: XOR<AssessmentQuestionAssignUpdateWithoutAssessmentQuestionAnswerInput, AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentQuestionAnswerInput>
    create: XOR<AssessmentQuestionAssignCreateWithoutAssessmentQuestionAnswerInput, AssessmentQuestionAssignUncheckedCreateWithoutAssessmentQuestionAnswerInput>
    where?: AssessmentQuestionAssignWhereInput
  }

  export type AssessmentQuestionAssignUpdateToOneWithWhereWithoutAssessmentQuestionAnswerInput = {
    where?: AssessmentQuestionAssignWhereInput
    data: XOR<AssessmentQuestionAssignUpdateWithoutAssessmentQuestionAnswerInput, AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentQuestionAnswerInput>
  }

  export type AssessmentQuestionAssignUpdateWithoutAssessmentQuestionAnswerInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    Team?: TeamUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    Member?: TeamMemberUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestion?: AssessmentQuestionUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentAssign?: AssessmentAssignUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentQuestionAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    assessmentQuestionId?: IntFieldUpdateOperationsInput | number
    assessmentAssignId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuestionAnswerUpsertWithoutAssessmentQuestionAnswerInput = {
    update: XOR<AuestionAnswerUpdateWithoutAssessmentQuestionAnswerInput, AuestionAnswerUncheckedUpdateWithoutAssessmentQuestionAnswerInput>
    create: XOR<AuestionAnswerCreateWithoutAssessmentQuestionAnswerInput, AuestionAnswerUncheckedCreateWithoutAssessmentQuestionAnswerInput>
    where?: AuestionAnswerWhereInput
  }

  export type AuestionAnswerUpdateToOneWithWhereWithoutAssessmentQuestionAnswerInput = {
    where?: AuestionAnswerWhereInput
    data: XOR<AuestionAnswerUpdateWithoutAssessmentQuestionAnswerInput, AuestionAnswerUncheckedUpdateWithoutAssessmentQuestionAnswerInput>
  }

  export type AuestionAnswerUpdateWithoutAssessmentQuestionAnswerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Question?: QuestionUpdateOneRequiredWithoutAuestionAnswerNestedInput
  }

  export type AuestionAnswerUncheckedUpdateWithoutAssessmentQuestionAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateWithoutAssessmentQuestionAssignInput = {
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation: OrganisationCreateNestedOneWithoutAssessmentInput
    AssessmentAssign?: AssessmentAssignCreateNestedManyWithoutAssessmentInput
    AssessmentQuestion?: AssessmentQuestionCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutAssessmentQuestionAssignInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    organisationId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignUncheckedCreateNestedManyWithoutAssessmentInput
    AssessmentQuestion?: AssessmentQuestionUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutAssessmentQuestionAssignInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutAssessmentQuestionAssignInput, AssessmentUncheckedCreateWithoutAssessmentQuestionAssignInput>
  }

  export type TeamCreateWithoutAssessmentQuestionAssignInput = {
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation: OrganisationCreateNestedOneWithoutTeamInput
    AssessmentAssign?: AssessmentAssignCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutAssessmentQuestionAssignInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    organisationId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutAssessmentQuestionAssignInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAssessmentQuestionAssignInput, TeamUncheckedCreateWithoutAssessmentQuestionAssignInput>
  }

  export type TeamMemberCreateWithoutAssessmentQuestionAssignInput = {
    Level?: $Enums.TeamMemberLevel
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Member: UserCreateNestedOneWithoutTeamMemberInput
    AssessmentAssign?: AssessmentAssignCreateNestedManyWithoutMemberInput
  }

  export type TeamMemberUncheckedCreateWithoutAssessmentQuestionAssignInput = {
    id?: number
    memberId: number
    Level?: $Enums.TeamMemberLevel
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignUncheckedCreateNestedManyWithoutMemberInput
  }

  export type TeamMemberCreateOrConnectWithoutAssessmentQuestionAssignInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutAssessmentQuestionAssignInput, TeamMemberUncheckedCreateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentQuestionCreateWithoutAssessmentQuestionAssignInput = {
    questionId_: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentQuestionInput
    Question: QuestionCreateNestedOneWithoutAssessmentQuestionInput
  }

  export type AssessmentQuestionUncheckedCreateWithoutAssessmentQuestionAssignInput = {
    id?: number
    assessmentId: number
    questionId_: number
    questionId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionCreateOrConnectWithoutAssessmentQuestionAssignInput = {
    where: AssessmentQuestionWhereUniqueInput
    create: XOR<AssessmentQuestionCreateWithoutAssessmentQuestionAssignInput, AssessmentQuestionUncheckedCreateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentAssignCreateWithoutAssessmentQuestionAssignInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentAssignInput
    Team: TeamCreateNestedOneWithoutAssessmentAssignInput
    Member: TeamMemberCreateNestedOneWithoutAssessmentAssignInput
  }

  export type AssessmentAssignUncheckedCreateWithoutAssessmentQuestionAssignInput = {
    id?: number
    assessmentId: number
    teamId: number
    memberId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentAssignCreateOrConnectWithoutAssessmentQuestionAssignInput = {
    where: AssessmentAssignWhereUniqueInput
    create: XOR<AssessmentAssignCreateWithoutAssessmentQuestionAssignInput, AssessmentAssignUncheckedCreateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentQuestionAnswerCreateWithoutAssessmentQuestionAssignInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    AuestionAnswer: AuestionAnswerCreateNestedOneWithoutAssessmentQuestionAnswerInput
  }

  export type AssessmentQuestionAnswerUncheckedCreateWithoutAssessmentQuestionAssignInput = {
    id?: number
    questionAnswerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAnswerCreateOrConnectWithoutAssessmentQuestionAssignInput = {
    where: AssessmentQuestionAnswerWhereUniqueInput
    create: XOR<AssessmentQuestionAnswerCreateWithoutAssessmentQuestionAssignInput, AssessmentQuestionAnswerUncheckedCreateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentQuestionAnswerCreateManyAssessmentQuestionAssignInputEnvelope = {
    data: AssessmentQuestionAnswerCreateManyAssessmentQuestionAssignInput | AssessmentQuestionAnswerCreateManyAssessmentQuestionAssignInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentUpsertWithoutAssessmentQuestionAssignInput = {
    update: XOR<AssessmentUpdateWithoutAssessmentQuestionAssignInput, AssessmentUncheckedUpdateWithoutAssessmentQuestionAssignInput>
    create: XOR<AssessmentCreateWithoutAssessmentQuestionAssignInput, AssessmentUncheckedCreateWithoutAssessmentQuestionAssignInput>
    where?: AssessmentWhereInput
  }

  export type AssessmentUpdateToOneWithWhereWithoutAssessmentQuestionAssignInput = {
    where?: AssessmentWhereInput
    data: XOR<AssessmentUpdateWithoutAssessmentQuestionAssignInput, AssessmentUncheckedUpdateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentUpdateWithoutAssessmentQuestionAssignInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUpdateOneRequiredWithoutAssessmentNestedInput
    AssessmentAssign?: AssessmentAssignUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestion?: AssessmentQuestionUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutAssessmentQuestionAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUncheckedUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestion?: AssessmentQuestionUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type TeamUpsertWithoutAssessmentQuestionAssignInput = {
    update: XOR<TeamUpdateWithoutAssessmentQuestionAssignInput, TeamUncheckedUpdateWithoutAssessmentQuestionAssignInput>
    create: XOR<TeamCreateWithoutAssessmentQuestionAssignInput, TeamUncheckedCreateWithoutAssessmentQuestionAssignInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutAssessmentQuestionAssignInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutAssessmentQuestionAssignInput, TeamUncheckedUpdateWithoutAssessmentQuestionAssignInput>
  }

  export type TeamUpdateWithoutAssessmentQuestionAssignInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUpdateOneRequiredWithoutTeamNestedInput
    AssessmentAssign?: AssessmentAssignUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutAssessmentQuestionAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    organisationId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamMemberUpsertWithoutAssessmentQuestionAssignInput = {
    update: XOR<TeamMemberUpdateWithoutAssessmentQuestionAssignInput, TeamMemberUncheckedUpdateWithoutAssessmentQuestionAssignInput>
    create: XOR<TeamMemberCreateWithoutAssessmentQuestionAssignInput, TeamMemberUncheckedCreateWithoutAssessmentQuestionAssignInput>
    where?: TeamMemberWhereInput
  }

  export type TeamMemberUpdateToOneWithWhereWithoutAssessmentQuestionAssignInput = {
    where?: TeamMemberWhereInput
    data: XOR<TeamMemberUpdateWithoutAssessmentQuestionAssignInput, TeamMemberUncheckedUpdateWithoutAssessmentQuestionAssignInput>
  }

  export type TeamMemberUpdateWithoutAssessmentQuestionAssignInput = {
    Level?: EnumTeamMemberLevelFieldUpdateOperationsInput | $Enums.TeamMemberLevel
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Member?: UserUpdateOneRequiredWithoutTeamMemberNestedInput
    AssessmentAssign?: AssessmentAssignUpdateManyWithoutMemberNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutAssessmentQuestionAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    Level?: EnumTeamMemberLevelFieldUpdateOperationsInput | $Enums.TeamMemberLevel
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type AssessmentQuestionUpsertWithoutAssessmentQuestionAssignInput = {
    update: XOR<AssessmentQuestionUpdateWithoutAssessmentQuestionAssignInput, AssessmentQuestionUncheckedUpdateWithoutAssessmentQuestionAssignInput>
    create: XOR<AssessmentQuestionCreateWithoutAssessmentQuestionAssignInput, AssessmentQuestionUncheckedCreateWithoutAssessmentQuestionAssignInput>
    where?: AssessmentQuestionWhereInput
  }

  export type AssessmentQuestionUpdateToOneWithWhereWithoutAssessmentQuestionAssignInput = {
    where?: AssessmentQuestionWhereInput
    data: XOR<AssessmentQuestionUpdateWithoutAssessmentQuestionAssignInput, AssessmentQuestionUncheckedUpdateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentQuestionUpdateWithoutAssessmentQuestionAssignInput = {
    questionId_?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentQuestionNestedInput
    Question?: QuestionUpdateOneRequiredWithoutAssessmentQuestionNestedInput
  }

  export type AssessmentQuestionUncheckedUpdateWithoutAssessmentQuestionAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    questionId_?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAssignUpsertWithoutAssessmentQuestionAssignInput = {
    update: XOR<AssessmentAssignUpdateWithoutAssessmentQuestionAssignInput, AssessmentAssignUncheckedUpdateWithoutAssessmentQuestionAssignInput>
    create: XOR<AssessmentAssignCreateWithoutAssessmentQuestionAssignInput, AssessmentAssignUncheckedCreateWithoutAssessmentQuestionAssignInput>
    where?: AssessmentAssignWhereInput
  }

  export type AssessmentAssignUpdateToOneWithWhereWithoutAssessmentQuestionAssignInput = {
    where?: AssessmentAssignWhereInput
    data: XOR<AssessmentAssignUpdateWithoutAssessmentQuestionAssignInput, AssessmentAssignUncheckedUpdateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentAssignUpdateWithoutAssessmentQuestionAssignInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentAssignNestedInput
    Team?: TeamUpdateOneRequiredWithoutAssessmentAssignNestedInput
    Member?: TeamMemberUpdateOneRequiredWithoutAssessmentAssignNestedInput
  }

  export type AssessmentAssignUncheckedUpdateWithoutAssessmentQuestionAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAnswerUpsertWithWhereUniqueWithoutAssessmentQuestionAssignInput = {
    where: AssessmentQuestionAnswerWhereUniqueInput
    update: XOR<AssessmentQuestionAnswerUpdateWithoutAssessmentQuestionAssignInput, AssessmentQuestionAnswerUncheckedUpdateWithoutAssessmentQuestionAssignInput>
    create: XOR<AssessmentQuestionAnswerCreateWithoutAssessmentQuestionAssignInput, AssessmentQuestionAnswerUncheckedCreateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentQuestionAnswerUpdateWithWhereUniqueWithoutAssessmentQuestionAssignInput = {
    where: AssessmentQuestionAnswerWhereUniqueInput
    data: XOR<AssessmentQuestionAnswerUpdateWithoutAssessmentQuestionAssignInput, AssessmentQuestionAnswerUncheckedUpdateWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentQuestionAnswerUpdateManyWithWhereWithoutAssessmentQuestionAssignInput = {
    where: AssessmentQuestionAnswerScalarWhereInput
    data: XOR<AssessmentQuestionAnswerUpdateManyMutationInput, AssessmentQuestionAnswerUncheckedUpdateManyWithoutAssessmentQuestionAssignInput>
  }

  export type AssessmentQuestionAnswerScalarWhereInput = {
    AND?: AssessmentQuestionAnswerScalarWhereInput | AssessmentQuestionAnswerScalarWhereInput[]
    OR?: AssessmentQuestionAnswerScalarWhereInput[]
    NOT?: AssessmentQuestionAnswerScalarWhereInput | AssessmentQuestionAnswerScalarWhereInput[]
    id?: IntFilter<"AssessmentQuestionAnswer"> | number
    assessmentQuestionAssignId?: IntFilter<"AssessmentQuestionAnswer"> | number
    questionAnswerId?: IntFilter<"AssessmentQuestionAnswer"> | number
    createdAt?: DateTimeFilter<"AssessmentQuestionAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentQuestionAnswer"> | Date | string
  }

  export type UserCreateWithoutOrganisationInput = {
    name: string
    email: string
    company?: string | null
    password: string
    rememberToken?: string | null
    disabled?: boolean
    tfaSecret?: string | null
    fpwToken?: string | null
    qrCodeVisibility?: boolean
    isDureation?: boolean
    tfaStatus?: boolean
    emailVerifiedAt?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserRole?: UserRoleCreateNestedManyWithoutUserInput
    TeamMember?: TeamMemberCreateNestedManyWithoutMemberInput
  }

  export type UserUncheckedCreateWithoutOrganisationInput = {
    id?: number
    name: string
    email: string
    company?: string | null
    password: string
    rememberToken?: string | null
    disabled?: boolean
    tfaSecret?: string | null
    fpwToken?: string | null
    qrCodeVisibility?: boolean
    isDureation?: boolean
    tfaStatus?: boolean
    emailVerifiedAt?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    TeamMember?: TeamMemberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type UserCreateOrConnectWithoutOrganisationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganisationInput, UserUncheckedCreateWithoutOrganisationInput>
  }

  export type AssessmentCreateWithoutOrganisationInput = {
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignCreateNestedManyWithoutAssessmentInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutAssessmentInput
    AssessmentQuestion?: AssessmentQuestionCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentUncheckedCreateWithoutOrganisationInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignUncheckedCreateNestedManyWithoutAssessmentInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentInput
    AssessmentQuestion?: AssessmentQuestionUncheckedCreateNestedManyWithoutAssessmentInput
  }

  export type AssessmentCreateOrConnectWithoutOrganisationInput = {
    where: AssessmentWhereUniqueInput
    create: XOR<AssessmentCreateWithoutOrganisationInput, AssessmentUncheckedCreateWithoutOrganisationInput>
  }

  export type AssessmentCreateManyOrganisationInputEnvelope = {
    data: AssessmentCreateManyOrganisationInput | AssessmentCreateManyOrganisationInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutOrganisationInput = {
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignCreateNestedManyWithoutTeamInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutOrganisationInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignUncheckedCreateNestedManyWithoutTeamInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutOrganisationInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutOrganisationInput, TeamUncheckedCreateWithoutOrganisationInput>
  }

  export type TeamCreateManyOrganisationInputEnvelope = {
    data: TeamCreateManyOrganisationInput | TeamCreateManyOrganisationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrganisationInput = {
    update: XOR<UserUpdateWithoutOrganisationInput, UserUncheckedUpdateWithoutOrganisationInput>
    create: XOR<UserCreateWithoutOrganisationInput, UserUncheckedCreateWithoutOrganisationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrganisationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrganisationInput, UserUncheckedUpdateWithoutOrganisationInput>
  }

  export type UserUpdateWithoutOrganisationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    tfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fpwToken?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeVisibility?: BoolFieldUpdateOperationsInput | boolean
    isDureation?: BoolFieldUpdateOperationsInput | boolean
    tfaStatus?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUpdateManyWithoutUserNestedInput
    TeamMember?: TeamMemberUpdateManyWithoutMemberNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganisationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    tfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fpwToken?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeVisibility?: BoolFieldUpdateOperationsInput | boolean
    isDureation?: BoolFieldUpdateOperationsInput | boolean
    tfaStatus?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    TeamMember?: TeamMemberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type AssessmentUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: AssessmentWhereUniqueInput
    update: XOR<AssessmentUpdateWithoutOrganisationInput, AssessmentUncheckedUpdateWithoutOrganisationInput>
    create: XOR<AssessmentCreateWithoutOrganisationInput, AssessmentUncheckedCreateWithoutOrganisationInput>
  }

  export type AssessmentUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: AssessmentWhereUniqueInput
    data: XOR<AssessmentUpdateWithoutOrganisationInput, AssessmentUncheckedUpdateWithoutOrganisationInput>
  }

  export type AssessmentUpdateManyWithWhereWithoutOrganisationInput = {
    where: AssessmentScalarWhereInput
    data: XOR<AssessmentUpdateManyMutationInput, AssessmentUncheckedUpdateManyWithoutOrganisationInput>
  }

  export type AssessmentScalarWhereInput = {
    AND?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    OR?: AssessmentScalarWhereInput[]
    NOT?: AssessmentScalarWhereInput | AssessmentScalarWhereInput[]
    id?: IntFilter<"Assessment"> | number
    name?: StringFilter<"Assessment"> | string
    description?: StringNullableFilter<"Assessment"> | string | null
    logo?: StringNullableFilter<"Assessment"> | string | null
    organisationId?: IntFilter<"Assessment"> | number
    password?: StringNullableFilter<"Assessment"> | string | null
    rememberToken?: StringNullableFilter<"Assessment"> | string | null
    isActive?: BoolFilter<"Assessment"> | boolean
    secretToken?: StringNullableFilter<"Assessment"> | string | null
    tfaToken?: StringNullableFilter<"Assessment"> | string | null
    createdAt?: DateTimeFilter<"Assessment"> | Date | string
    updatedAt?: DateTimeFilter<"Assessment"> | Date | string
  }

  export type TeamUpsertWithWhereUniqueWithoutOrganisationInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutOrganisationInput, TeamUncheckedUpdateWithoutOrganisationInput>
    create: XOR<TeamCreateWithoutOrganisationInput, TeamUncheckedCreateWithoutOrganisationInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutOrganisationInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutOrganisationInput, TeamUncheckedUpdateWithoutOrganisationInput>
  }

  export type TeamUpdateManyWithWhereWithoutOrganisationInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutOrganisationInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    logo?: StringNullableFilter<"Team"> | string | null
    organisationId?: IntFilter<"Team"> | number
    password?: StringNullableFilter<"Team"> | string | null
    rememberToken?: StringNullableFilter<"Team"> | string | null
    isActive?: BoolFilter<"Team"> | boolean
    secretToken?: StringNullableFilter<"Team"> | string | null
    tfaToken?: StringNullableFilter<"Team"> | string | null
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
  }

  export type AssessmentQuestionCreateWithoutQuestionInput = {
    questionId_: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentQuestionInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutAssessmentQuestionInput
  }

  export type AssessmentQuestionUncheckedCreateWithoutQuestionInput = {
    id?: number
    assessmentId: number
    questionId_: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentQuestionInput
  }

  export type AssessmentQuestionCreateOrConnectWithoutQuestionInput = {
    where: AssessmentQuestionWhereUniqueInput
    create: XOR<AssessmentQuestionCreateWithoutQuestionInput, AssessmentQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type AssessmentQuestionCreateManyQuestionInputEnvelope = {
    data: AssessmentQuestionCreateManyQuestionInput | AssessmentQuestionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AuestionAnswerCreateWithoutQuestionInput = {
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerCreateNestedManyWithoutAuestionAnswerInput
  }

  export type AuestionAnswerUncheckedCreateWithoutQuestionInput = {
    id?: number
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedCreateNestedManyWithoutAuestionAnswerInput
  }

  export type AuestionAnswerCreateOrConnectWithoutQuestionInput = {
    where: AuestionAnswerWhereUniqueInput
    create: XOR<AuestionAnswerCreateWithoutQuestionInput, AuestionAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AuestionAnswerCreateManyQuestionInputEnvelope = {
    data: AuestionAnswerCreateManyQuestionInput | AuestionAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AssessmentQuestionWhereUniqueInput
    update: XOR<AssessmentQuestionUpdateWithoutQuestionInput, AssessmentQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<AssessmentQuestionCreateWithoutQuestionInput, AssessmentQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type AssessmentQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AssessmentQuestionWhereUniqueInput
    data: XOR<AssessmentQuestionUpdateWithoutQuestionInput, AssessmentQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type AssessmentQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: AssessmentQuestionScalarWhereInput
    data: XOR<AssessmentQuestionUpdateManyMutationInput, AssessmentQuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AuestionAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AuestionAnswerWhereUniqueInput
    update: XOR<AuestionAnswerUpdateWithoutQuestionInput, AuestionAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AuestionAnswerCreateWithoutQuestionInput, AuestionAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AuestionAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AuestionAnswerWhereUniqueInput
    data: XOR<AuestionAnswerUpdateWithoutQuestionInput, AuestionAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AuestionAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AuestionAnswerScalarWhereInput
    data: XOR<AuestionAnswerUpdateManyMutationInput, AuestionAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AuestionAnswerScalarWhereInput = {
    AND?: AuestionAnswerScalarWhereInput | AuestionAnswerScalarWhereInput[]
    OR?: AuestionAnswerScalarWhereInput[]
    NOT?: AuestionAnswerScalarWhereInput | AuestionAnswerScalarWhereInput[]
    id?: IntFilter<"AuestionAnswer"> | number
    name?: StringFilter<"AuestionAnswer"> | string
    description?: StringNullableFilter<"AuestionAnswer"> | string | null
    questionId?: IntFilter<"AuestionAnswer"> | number
    isActive?: BoolFilter<"AuestionAnswer"> | boolean
    createdAt?: DateTimeFilter<"AuestionAnswer"> | Date | string
    updatedAt?: DateTimeFilter<"AuestionAnswer"> | Date | string
  }

  export type QuestionCreateWithoutAuestionAnswerInput = {
    name: string
    description?: string | null
    questionType?: $Enums.QuestionType | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestion?: AssessmentQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAuestionAnswerInput = {
    id?: number
    name: string
    description?: string | null
    questionType?: $Enums.QuestionType | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestion?: AssessmentQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAuestionAnswerInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAuestionAnswerInput, QuestionUncheckedCreateWithoutAuestionAnswerInput>
  }

  export type AssessmentQuestionAnswerCreateWithoutAuestionAnswerInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign: AssessmentQuestionAssignCreateNestedOneWithoutAssessmentQuestionAnswerInput
  }

  export type AssessmentQuestionAnswerUncheckedCreateWithoutAuestionAnswerInput = {
    id?: number
    assessmentQuestionAssignId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAnswerCreateOrConnectWithoutAuestionAnswerInput = {
    where: AssessmentQuestionAnswerWhereUniqueInput
    create: XOR<AssessmentQuestionAnswerCreateWithoutAuestionAnswerInput, AssessmentQuestionAnswerUncheckedCreateWithoutAuestionAnswerInput>
  }

  export type AssessmentQuestionAnswerCreateManyAuestionAnswerInputEnvelope = {
    data: AssessmentQuestionAnswerCreateManyAuestionAnswerInput | AssessmentQuestionAnswerCreateManyAuestionAnswerInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutAuestionAnswerInput = {
    update: XOR<QuestionUpdateWithoutAuestionAnswerInput, QuestionUncheckedUpdateWithoutAuestionAnswerInput>
    create: XOR<QuestionCreateWithoutAuestionAnswerInput, QuestionUncheckedCreateWithoutAuestionAnswerInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAuestionAnswerInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAuestionAnswerInput, QuestionUncheckedUpdateWithoutAuestionAnswerInput>
  }

  export type QuestionUpdateWithoutAuestionAnswerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestion?: AssessmentQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAuestionAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestion?: AssessmentQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AssessmentQuestionAnswerUpsertWithWhereUniqueWithoutAuestionAnswerInput = {
    where: AssessmentQuestionAnswerWhereUniqueInput
    update: XOR<AssessmentQuestionAnswerUpdateWithoutAuestionAnswerInput, AssessmentQuestionAnswerUncheckedUpdateWithoutAuestionAnswerInput>
    create: XOR<AssessmentQuestionAnswerCreateWithoutAuestionAnswerInput, AssessmentQuestionAnswerUncheckedCreateWithoutAuestionAnswerInput>
  }

  export type AssessmentQuestionAnswerUpdateWithWhereUniqueWithoutAuestionAnswerInput = {
    where: AssessmentQuestionAnswerWhereUniqueInput
    data: XOR<AssessmentQuestionAnswerUpdateWithoutAuestionAnswerInput, AssessmentQuestionAnswerUncheckedUpdateWithoutAuestionAnswerInput>
  }

  export type AssessmentQuestionAnswerUpdateManyWithWhereWithoutAuestionAnswerInput = {
    where: AssessmentQuestionAnswerScalarWhereInput
    data: XOR<AssessmentQuestionAnswerUpdateManyMutationInput, AssessmentQuestionAnswerUncheckedUpdateManyWithoutAuestionAnswerInput>
  }

  export type UserRoleCreateWithoutRoleInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    id?: IntFilter<"UserRole"> | number
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
  }

  export type OrganisationCreateWithoutTeamInput = {
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Owner: UserCreateNestedOneWithoutOrganisationInput
    Assessment?: AssessmentCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    description: string
    isActive?: boolean
    ownerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment?: AssessmentUncheckedCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationCreateOrConnectWithoutTeamInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutTeamInput, OrganisationUncheckedCreateWithoutTeamInput>
  }

  export type AssessmentAssignCreateWithoutTeamInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentAssignInput
    Member: TeamMemberCreateNestedOneWithoutAssessmentAssignInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutAssessmentAssignInput
  }

  export type AssessmentAssignUncheckedCreateWithoutTeamInput = {
    id?: number
    assessmentId: number
    memberId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentAssignInput
  }

  export type AssessmentAssignCreateOrConnectWithoutTeamInput = {
    where: AssessmentAssignWhereUniqueInput
    create: XOR<AssessmentAssignCreateWithoutTeamInput, AssessmentAssignUncheckedCreateWithoutTeamInput>
  }

  export type AssessmentAssignCreateManyTeamInputEnvelope = {
    data: AssessmentAssignCreateManyTeamInput | AssessmentAssignCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentQuestionAssignCreateWithoutTeamInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentQuestionAssignInput
    Member: TeamMemberCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestion: AssessmentQuestionCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentAssign: AssessmentAssignCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignUncheckedCreateWithoutTeamInput = {
    id?: number
    assessmentId: number
    memberId: number
    assessmentQuestionId: number
    assessmentAssignId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignCreateOrConnectWithoutTeamInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    create: XOR<AssessmentQuestionAssignCreateWithoutTeamInput, AssessmentQuestionAssignUncheckedCreateWithoutTeamInput>
  }

  export type AssessmentQuestionAssignCreateManyTeamInputEnvelope = {
    data: AssessmentQuestionAssignCreateManyTeamInput | AssessmentQuestionAssignCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type OrganisationUpsertWithoutTeamInput = {
    update: XOR<OrganisationUpdateWithoutTeamInput, OrganisationUncheckedUpdateWithoutTeamInput>
    create: XOR<OrganisationCreateWithoutTeamInput, OrganisationUncheckedCreateWithoutTeamInput>
    where?: OrganisationWhereInput
  }

  export type OrganisationUpdateToOneWithWhereWithoutTeamInput = {
    where?: OrganisationWhereInput
    data: XOR<OrganisationUpdateWithoutTeamInput, OrganisationUncheckedUpdateWithoutTeamInput>
  }

  export type OrganisationUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Owner?: UserUpdateOneRequiredWithoutOrganisationNestedInput
    Assessment?: AssessmentUpdateManyWithoutOrganisationNestedInput
  }

  export type OrganisationUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUncheckedUpdateManyWithoutOrganisationNestedInput
  }

  export type AssessmentAssignUpsertWithWhereUniqueWithoutTeamInput = {
    where: AssessmentAssignWhereUniqueInput
    update: XOR<AssessmentAssignUpdateWithoutTeamInput, AssessmentAssignUncheckedUpdateWithoutTeamInput>
    create: XOR<AssessmentAssignCreateWithoutTeamInput, AssessmentAssignUncheckedCreateWithoutTeamInput>
  }

  export type AssessmentAssignUpdateWithWhereUniqueWithoutTeamInput = {
    where: AssessmentAssignWhereUniqueInput
    data: XOR<AssessmentAssignUpdateWithoutTeamInput, AssessmentAssignUncheckedUpdateWithoutTeamInput>
  }

  export type AssessmentAssignUpdateManyWithWhereWithoutTeamInput = {
    where: AssessmentAssignScalarWhereInput
    data: XOR<AssessmentAssignUpdateManyMutationInput, AssessmentAssignUncheckedUpdateManyWithoutTeamInput>
  }

  export type AssessmentQuestionAssignUpsertWithWhereUniqueWithoutTeamInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    update: XOR<AssessmentQuestionAssignUpdateWithoutTeamInput, AssessmentQuestionAssignUncheckedUpdateWithoutTeamInput>
    create: XOR<AssessmentQuestionAssignCreateWithoutTeamInput, AssessmentQuestionAssignUncheckedCreateWithoutTeamInput>
  }

  export type AssessmentQuestionAssignUpdateWithWhereUniqueWithoutTeamInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    data: XOR<AssessmentQuestionAssignUpdateWithoutTeamInput, AssessmentQuestionAssignUncheckedUpdateWithoutTeamInput>
  }

  export type AssessmentQuestionAssignUpdateManyWithWhereWithoutTeamInput = {
    where: AssessmentQuestionAssignScalarWhereInput
    data: XOR<AssessmentQuestionAssignUpdateManyMutationInput, AssessmentQuestionAssignUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserCreateWithoutTeamMemberInput = {
    name: string
    email: string
    company?: string | null
    password: string
    rememberToken?: string | null
    disabled?: boolean
    tfaSecret?: string | null
    fpwToken?: string | null
    qrCodeVisibility?: boolean
    isDureation?: boolean
    tfaStatus?: boolean
    emailVerifiedAt?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation?: OrganisationCreateNestedOneWithoutOwnerInput
    UserRole?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamMemberInput = {
    id?: number
    name: string
    email: string
    company?: string | null
    password: string
    rememberToken?: string | null
    disabled?: boolean
    tfaSecret?: string | null
    fpwToken?: string | null
    qrCodeVisibility?: boolean
    isDureation?: boolean
    tfaStatus?: boolean
    emailVerifiedAt?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation?: OrganisationUncheckedCreateNestedOneWithoutOwnerInput
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamMemberInput, UserUncheckedCreateWithoutTeamMemberInput>
  }

  export type AssessmentAssignCreateWithoutMemberInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentAssignInput
    Team: TeamCreateNestedOneWithoutAssessmentAssignInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutAssessmentAssignInput
  }

  export type AssessmentAssignUncheckedCreateWithoutMemberInput = {
    id?: number
    assessmentId: number
    teamId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutAssessmentAssignInput
  }

  export type AssessmentAssignCreateOrConnectWithoutMemberInput = {
    where: AssessmentAssignWhereUniqueInput
    create: XOR<AssessmentAssignCreateWithoutMemberInput, AssessmentAssignUncheckedCreateWithoutMemberInput>
  }

  export type AssessmentAssignCreateManyMemberInputEnvelope = {
    data: AssessmentAssignCreateManyMemberInput | AssessmentAssignCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentQuestionAssignCreateWithoutMemberInput = {
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment: AssessmentCreateNestedOneWithoutAssessmentQuestionAssignInput
    Team: TeamCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestion: AssessmentQuestionCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentAssign: AssessmentAssignCreateNestedOneWithoutAssessmentQuestionAssignInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignUncheckedCreateWithoutMemberInput = {
    id?: number
    assessmentId: number
    teamId: number
    assessmentQuestionId: number
    assessmentAssignId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedCreateNestedManyWithoutAssessmentQuestionAssignInput
  }

  export type AssessmentQuestionAssignCreateOrConnectWithoutMemberInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    create: XOR<AssessmentQuestionAssignCreateWithoutMemberInput, AssessmentQuestionAssignUncheckedCreateWithoutMemberInput>
  }

  export type AssessmentQuestionAssignCreateManyMemberInputEnvelope = {
    data: AssessmentQuestionAssignCreateManyMemberInput | AssessmentQuestionAssignCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeamMemberInput = {
    update: XOR<UserUpdateWithoutTeamMemberInput, UserUncheckedUpdateWithoutTeamMemberInput>
    create: XOR<UserCreateWithoutTeamMemberInput, UserUncheckedCreateWithoutTeamMemberInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamMemberInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamMemberInput, UserUncheckedUpdateWithoutTeamMemberInput>
  }

  export type UserUpdateWithoutTeamMemberInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    tfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fpwToken?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeVisibility?: BoolFieldUpdateOperationsInput | boolean
    isDureation?: BoolFieldUpdateOperationsInput | boolean
    tfaStatus?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUpdateOneWithoutOwnerNestedInput
    UserRole?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    tfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fpwToken?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeVisibility?: BoolFieldUpdateOperationsInput | boolean
    isDureation?: BoolFieldUpdateOperationsInput | boolean
    tfaStatus?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUncheckedUpdateOneWithoutOwnerNestedInput
    UserRole?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssessmentAssignUpsertWithWhereUniqueWithoutMemberInput = {
    where: AssessmentAssignWhereUniqueInput
    update: XOR<AssessmentAssignUpdateWithoutMemberInput, AssessmentAssignUncheckedUpdateWithoutMemberInput>
    create: XOR<AssessmentAssignCreateWithoutMemberInput, AssessmentAssignUncheckedCreateWithoutMemberInput>
  }

  export type AssessmentAssignUpdateWithWhereUniqueWithoutMemberInput = {
    where: AssessmentAssignWhereUniqueInput
    data: XOR<AssessmentAssignUpdateWithoutMemberInput, AssessmentAssignUncheckedUpdateWithoutMemberInput>
  }

  export type AssessmentAssignUpdateManyWithWhereWithoutMemberInput = {
    where: AssessmentAssignScalarWhereInput
    data: XOR<AssessmentAssignUpdateManyMutationInput, AssessmentAssignUncheckedUpdateManyWithoutMemberInput>
  }

  export type AssessmentQuestionAssignUpsertWithWhereUniqueWithoutMemberInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    update: XOR<AssessmentQuestionAssignUpdateWithoutMemberInput, AssessmentQuestionAssignUncheckedUpdateWithoutMemberInput>
    create: XOR<AssessmentQuestionAssignCreateWithoutMemberInput, AssessmentQuestionAssignUncheckedCreateWithoutMemberInput>
  }

  export type AssessmentQuestionAssignUpdateWithWhereUniqueWithoutMemberInput = {
    where: AssessmentQuestionAssignWhereUniqueInput
    data: XOR<AssessmentQuestionAssignUpdateWithoutMemberInput, AssessmentQuestionAssignUncheckedUpdateWithoutMemberInput>
  }

  export type AssessmentQuestionAssignUpdateManyWithWhereWithoutMemberInput = {
    where: AssessmentQuestionAssignScalarWhereInput
    data: XOR<AssessmentQuestionAssignUpdateManyMutationInput, AssessmentQuestionAssignUncheckedUpdateManyWithoutMemberInput>
  }

  export type OrganisationCreateWithoutOwnerInput = {
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment?: AssessmentCreateNestedManyWithoutOrganisationInput
    Team?: TeamCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Assessment?: AssessmentUncheckedCreateNestedManyWithoutOrganisationInput
    Team?: TeamUncheckedCreateNestedManyWithoutOrganisationInput
  }

  export type OrganisationCreateOrConnectWithoutOwnerInput = {
    where: OrganisationWhereUniqueInput
    create: XOR<OrganisationCreateWithoutOwnerInput, OrganisationUncheckedCreateWithoutOwnerInput>
  }

  export type UserRoleCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    Role: RoleCreateNestedOneWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    id?: number
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamMemberCreateWithoutMemberInput = {
    Level?: $Enums.TeamMemberLevel
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignCreateNestedManyWithoutMemberInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignCreateNestedManyWithoutMemberInput
  }

  export type TeamMemberUncheckedCreateWithoutMemberInput = {
    id?: number
    Level?: $Enums.TeamMemberLevel
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    AssessmentAssign?: AssessmentAssignUncheckedCreateNestedManyWithoutMemberInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedCreateNestedManyWithoutMemberInput
  }

  export type TeamMemberCreateOrConnectWithoutMemberInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutMemberInput, TeamMemberUncheckedCreateWithoutMemberInput>
  }

  export type TeamMemberCreateManyMemberInputEnvelope = {
    data: TeamMemberCreateManyMemberInput | TeamMemberCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type OrganisationUpsertWithoutOwnerInput = {
    update: XOR<OrganisationUpdateWithoutOwnerInput, OrganisationUncheckedUpdateWithoutOwnerInput>
    create: XOR<OrganisationCreateWithoutOwnerInput, OrganisationUncheckedCreateWithoutOwnerInput>
    where?: OrganisationWhereInput
  }

  export type OrganisationUpdateToOneWithWhereWithoutOwnerInput = {
    where?: OrganisationWhereInput
    data: XOR<OrganisationUpdateWithoutOwnerInput, OrganisationUncheckedUpdateWithoutOwnerInput>
  }

  export type OrganisationUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateManyWithoutOrganisationNestedInput
    Team?: TeamUpdateManyWithoutOrganisationNestedInput
  }

  export type OrganisationUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUncheckedUpdateManyWithoutOrganisationNestedInput
    Team?: TeamUncheckedUpdateManyWithoutOrganisationNestedInput
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutMemberInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutMemberInput, TeamMemberUncheckedUpdateWithoutMemberInput>
    create: XOR<TeamMemberCreateWithoutMemberInput, TeamMemberUncheckedCreateWithoutMemberInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutMemberInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutMemberInput, TeamMemberUncheckedUpdateWithoutMemberInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutMemberInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutMemberInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: IntFilter<"TeamMember"> | number
    memberId?: IntFilter<"TeamMember"> | number
    Level?: EnumTeamMemberLevelFilter<"TeamMember"> | $Enums.TeamMemberLevel
    password?: StringNullableFilter<"TeamMember"> | string | null
    rememberToken?: StringNullableFilter<"TeamMember"> | string | null
    isActive?: BoolFilter<"TeamMember"> | boolean
    secretToken?: StringNullableFilter<"TeamMember"> | string | null
    tfaToken?: StringNullableFilter<"TeamMember"> | string | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
  }

  export type UserCreateWithoutUserRoleInput = {
    name: string
    email: string
    company?: string | null
    password: string
    rememberToken?: string | null
    disabled?: boolean
    tfaSecret?: string | null
    fpwToken?: string | null
    qrCodeVisibility?: boolean
    isDureation?: boolean
    tfaStatus?: boolean
    emailVerifiedAt?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation?: OrganisationCreateNestedOneWithoutOwnerInput
    TeamMember?: TeamMemberCreateNestedManyWithoutMemberInput
  }

  export type UserUncheckedCreateWithoutUserRoleInput = {
    id?: number
    name: string
    email: string
    company?: string | null
    password: string
    rememberToken?: string | null
    disabled?: boolean
    tfaSecret?: string | null
    fpwToken?: string | null
    qrCodeVisibility?: boolean
    isDureation?: boolean
    tfaStatus?: boolean
    emailVerifiedAt?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organisation?: OrganisationUncheckedCreateNestedOneWithoutOwnerInput
    TeamMember?: TeamMemberUncheckedCreateNestedManyWithoutMemberInput
  }

  export type UserCreateOrConnectWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type RoleCreateWithoutUserRoleInput = {
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUserRoleInput = {
    id?: number
    name: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUserRoleInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
  }

  export type UserUpsertWithoutUserRoleInput = {
    update: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRoleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type UserUpdateWithoutUserRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    tfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fpwToken?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeVisibility?: BoolFieldUpdateOperationsInput | boolean
    isDureation?: BoolFieldUpdateOperationsInput | boolean
    tfaStatus?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUpdateOneWithoutOwnerNestedInput
    TeamMember?: TeamMemberUpdateManyWithoutMemberNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    disabled?: BoolFieldUpdateOperationsInput | boolean
    tfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fpwToken?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeVisibility?: BoolFieldUpdateOperationsInput | boolean
    isDureation?: BoolFieldUpdateOperationsInput | boolean
    tfaStatus?: BoolFieldUpdateOperationsInput | boolean
    emailVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organisation?: OrganisationUncheckedUpdateOneWithoutOwnerNestedInput
    TeamMember?: TeamMemberUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type RoleUpsertWithoutUserRoleInput = {
    update: XOR<RoleUpdateWithoutUserRoleInput, RoleUncheckedUpdateWithoutUserRoleInput>
    create: XOR<RoleCreateWithoutUserRoleInput, RoleUncheckedCreateWithoutUserRoleInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserRoleInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserRoleInput, RoleUncheckedUpdateWithoutUserRoleInput>
  }

  export type RoleUpdateWithoutUserRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAssignCreateManyAssessmentInput = {
    id?: number
    teamId: number
    memberId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAssignCreateManyAssessmentInput = {
    id?: number
    teamId: number
    memberId: number
    assessmentQuestionId: number
    assessmentAssignId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionCreateManyAssessmentInput = {
    id?: number
    questionId_: number
    questionId: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentAssignUpdateWithoutAssessmentInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Team?: TeamUpdateOneRequiredWithoutAssessmentAssignNestedInput
    Member?: TeamMemberUpdateOneRequiredWithoutAssessmentAssignNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutAssessmentAssignNestedInput
  }

  export type AssessmentAssignUncheckedUpdateWithoutAssessmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentAssignNestedInput
  }

  export type AssessmentAssignUncheckedUpdateManyWithoutAssessmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAssignUpdateWithoutAssessmentInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Team?: TeamUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    Member?: TeamMemberUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestion?: AssessmentQuestionUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentAssign?: AssessmentAssignUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    assessmentQuestionId?: IntFieldUpdateOperationsInput | number
    assessmentAssignId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    assessmentQuestionId?: IntFieldUpdateOperationsInput | number
    assessmentAssignId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionUpdateWithoutAssessmentInput = {
    questionId_?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Question?: QuestionUpdateOneRequiredWithoutAssessmentQuestionNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutAssessmentQuestionNestedInput
  }

  export type AssessmentQuestionUncheckedUpdateWithoutAssessmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId_?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentQuestionNestedInput
  }

  export type AssessmentQuestionUncheckedUpdateManyWithoutAssessmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId_?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAssignCreateManyAssessmentAssignInput = {
    id?: number
    assessmentId: number
    teamId: number
    memberId: number
    assessmentQuestionId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAssignUpdateWithoutAssessmentAssignInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    Team?: TeamUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    Member?: TeamMemberUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestion?: AssessmentQuestionUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    assessmentQuestionId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    assessmentQuestionId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAssignCreateManyAssessmentQuestionInput = {
    id?: number
    assessmentId: number
    teamId: number
    memberId: number
    assessmentAssignId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAssignUpdateWithoutAssessmentQuestionInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    Team?: TeamUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    Member?: TeamMemberUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentAssign?: AssessmentAssignUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateWithoutAssessmentQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    assessmentAssignId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    assessmentAssignId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAnswerCreateManyAssessmentQuestionAssignInput = {
    id?: number
    questionAnswerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAnswerUpdateWithoutAssessmentQuestionAssignInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AuestionAnswer?: AuestionAnswerUpdateOneRequiredWithoutAssessmentQuestionAnswerNestedInput
  }

  export type AssessmentQuestionAnswerUncheckedUpdateWithoutAssessmentQuestionAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionAnswerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAnswerUncheckedUpdateManyWithoutAssessmentQuestionAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionAnswerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentCreateManyOrganisationInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamCreateManyOrganisationInput = {
    id?: number
    name: string
    description?: string | null
    logo?: string | null
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentUpdateWithoutOrganisationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestion?: AssessmentQuestionUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateWithoutOrganisationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUncheckedUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentNestedInput
    AssessmentQuestion?: AssessmentQuestionUncheckedUpdateManyWithoutAssessmentNestedInput
  }

  export type AssessmentUncheckedUpdateManyWithoutOrganisationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUpdateWithoutOrganisationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUpdateManyWithoutTeamNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutOrganisationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUncheckedUpdateManyWithoutTeamNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutOrganisationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionCreateManyQuestionInput = {
    id?: number
    assessmentId: number
    questionId_: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuestionAnswerCreateManyQuestionInput = {
    id?: number
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionUpdateWithoutQuestionInput = {
    questionId_?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentQuestionNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutAssessmentQuestionNestedInput
  }

  export type AssessmentQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    questionId_?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentQuestionNestedInput
  }

  export type AssessmentQuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    questionId_?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuestionAnswerUpdateWithoutQuestionInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUpdateManyWithoutAuestionAnswerNestedInput
  }

  export type AuestionAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedUpdateManyWithoutAuestionAnswerNestedInput
  }

  export type AuestionAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAnswerCreateManyAuestionAnswerInput = {
    id?: number
    assessmentQuestionAssignId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAnswerUpdateWithoutAuestionAnswerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateOneRequiredWithoutAssessmentQuestionAnswerNestedInput
  }

  export type AssessmentQuestionAnswerUncheckedUpdateWithoutAuestionAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentQuestionAssignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAnswerUncheckedUpdateManyWithoutAuestionAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentQuestionAssignId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyRoleInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAssignCreateManyTeamInput = {
    id?: number
    assessmentId: number
    memberId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAssignCreateManyTeamInput = {
    id?: number
    assessmentId: number
    memberId: number
    assessmentQuestionId: number
    assessmentAssignId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentAssignUpdateWithoutTeamInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentAssignNestedInput
    Member?: TeamMemberUpdateOneRequiredWithoutAssessmentAssignNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutAssessmentAssignNestedInput
  }

  export type AssessmentAssignUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentAssignNestedInput
  }

  export type AssessmentAssignUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAssignUpdateWithoutTeamInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    Member?: TeamMemberUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestion?: AssessmentQuestionUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentAssign?: AssessmentAssignUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    assessmentQuestionId?: IntFieldUpdateOperationsInput | number
    assessmentAssignId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    assessmentQuestionId?: IntFieldUpdateOperationsInput | number
    assessmentAssignId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentAssignCreateManyMemberInput = {
    id?: number
    assessmentId: number
    teamId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentQuestionAssignCreateManyMemberInput = {
    id?: number
    assessmentId: number
    teamId: number
    assessmentQuestionId: number
    assessmentAssignId: number
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentAssignUpdateWithoutMemberInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentAssignNestedInput
    Team?: TeamUpdateOneRequiredWithoutAssessmentAssignNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutAssessmentAssignNestedInput
  }

  export type AssessmentAssignUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutAssessmentAssignNestedInput
  }

  export type AssessmentAssignUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentQuestionAssignUpdateWithoutMemberInput = {
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Assessment?: AssessmentUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    Team?: TeamUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestion?: AssessmentQuestionUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentAssign?: AssessmentAssignUpdateOneRequiredWithoutAssessmentQuestionAssignNestedInput
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    assessmentQuestionId?: IntFieldUpdateOperationsInput | number
    assessmentAssignId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentQuestionAnswer?: AssessmentQuestionAnswerUncheckedUpdateManyWithoutAssessmentQuestionAssignNestedInput
  }

  export type AssessmentQuestionAssignUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    assessmentId?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    assessmentQuestionId?: IntFieldUpdateOperationsInput | number
    assessmentAssignId?: IntFieldUpdateOperationsInput | number
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyUserInput = {
    id?: number
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberCreateManyMemberInput = {
    id?: number
    Level?: $Enums.TeamMemberLevel
    password?: string | null
    rememberToken?: string | null
    isActive?: boolean
    secretToken?: string | null
    tfaToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Role?: RoleUpdateOneRequiredWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUpdateWithoutMemberInput = {
    Level?: EnumTeamMemberLevelFieldUpdateOperationsInput | $Enums.TeamMemberLevel
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUpdateManyWithoutMemberNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUpdateManyWithoutMemberNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    Level?: EnumTeamMemberLevelFieldUpdateOperationsInput | $Enums.TeamMemberLevel
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AssessmentAssign?: AssessmentAssignUncheckedUpdateManyWithoutMemberNestedInput
    AssessmentQuestionAssign?: AssessmentQuestionAssignUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type TeamMemberUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    Level?: EnumTeamMemberLevelFieldUpdateOperationsInput | $Enums.TeamMemberLevel
    password?: NullableStringFieldUpdateOperationsInput | string | null
    rememberToken?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    secretToken?: NullableStringFieldUpdateOperationsInput | string | null
    tfaToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AssessmentCountOutputTypeDefaultArgs instead
     */
    export type AssessmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentAssignCountOutputTypeDefaultArgs instead
     */
    export type AssessmentAssignCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentAssignCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentQuestionCountOutputTypeDefaultArgs instead
     */
    export type AssessmentQuestionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentQuestionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentQuestionAssignCountOutputTypeDefaultArgs instead
     */
    export type AssessmentQuestionAssignCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentQuestionAssignCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganisationCountOutputTypeDefaultArgs instead
     */
    export type OrganisationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganisationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionCountOutputTypeDefaultArgs instead
     */
    export type QuestionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuestionAnswerCountOutputTypeDefaultArgs instead
     */
    export type AuestionAnswerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuestionAnswerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamCountOutputTypeDefaultArgs instead
     */
    export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamMemberCountOutputTypeDefaultArgs instead
     */
    export type TeamMemberCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamMemberCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentDefaultArgs instead
     */
    export type AssessmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentAssignDefaultArgs instead
     */
    export type AssessmentAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentAssignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentQuestionDefaultArgs instead
     */
    export type AssessmentQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentQuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentQuestionAnswerDefaultArgs instead
     */
    export type AssessmentQuestionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentQuestionAnswerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentQuestionAssignDefaultArgs instead
     */
    export type AssessmentQuestionAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentQuestionAssignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganisationDefaultArgs instead
     */
    export type OrganisationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrganisationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionDefaultArgs instead
     */
    export type QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuestionAnswerDefaultArgs instead
     */
    export type AuestionAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuestionAnswerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamMemberDefaultArgs instead
     */
    export type TeamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleDefaultArgs instead
     */
    export type UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}