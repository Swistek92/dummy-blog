import { Resolver, Query, Mutation, Args, Int, Context } from "@nestjs/graphql";
import { PostService } from "./post.service";
import { Post } from "./entities/post.entity";
import { CreatePostInput } from "./dto/create-post.input";
import { UpdatePostInput } from "./dto/update-post.input";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-guard/jwt-auth.guard";

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  // @UseGuards(JwtGuardGuard)
  @Query(() => [Post], { name: "posts" })
  findAll(
    @Context() context,
    @Args("skip", { nullable: true }) skip?: number,
    @Args("take", { nullable: true }) take?: number
  ) {
    const user = context.req.user;
    // console.log("User from context:", user);
    return this.postService.findAll({ skip, take });

    // return this.postService.findAll();
  }

  @Query(() => Int, { name: "postCount" })
  count() {
    return this.postService.count();
  }

  @Query(() => Post)
  getPostById(@Args("id", { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }
}
