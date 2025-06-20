import { Resolver, Query, Mutation, Args, Int, Context } from "@nestjs/graphql";
import { PostService } from "./post.service";
import { Post } from "./entities/post.entity";
import { CreatePostInput } from "./dto/create-post.input";
import { UpdatePostInput } from "./dto/update-post.input";
import { UseGuards } from "@nestjs/common";
import { JwtGuardGuard } from "src/auth/guards/jwt-guard/jwt-guard.guard";

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @UseGuards(JwtGuardGuard)
  @Query(() => [Post], { name: "posts" })
  findAll(@Context() context) {
    const user = context.req.user;
    console.log("User from context:", user);
    return this.postService.findAll();
  }
}
