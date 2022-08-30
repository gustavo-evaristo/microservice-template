import { Query, Resolver } from 'type-graphql';

@Resolver()
export class SimpleResolver {
  private data: number[] = [1, 2, 3, 4, 5];

  @Query(() => [Number])
  list(): number[] {
    return this.data;
  }
}
