/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PostService } from "../post.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PostCreateInput } from "./PostCreateInput";
import { Post } from "./Post";
import { PostFindManyArgs } from "./PostFindManyArgs";
import { PostWhereUniqueInput } from "./PostWhereUniqueInput";
import { PostUpdateInput } from "./PostUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PostControllerBase {
  constructor(
    protected readonly service: PostService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Post })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPost(@common.Body() data: PostCreateInput): Promise<Post> {
    return await this.service.createPost({
      data: {
        ...data,

        userId: data.userId
          ? {
              connect: data.userId,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },

        title: true,
        description: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Post] })
  @ApiNestedQuery(PostFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async posts(@common.Req() request: Request): Promise<Post[]> {
    const args = plainToClass(PostFindManyArgs, request.query);
    return this.service.posts({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },

        title: true,
        description: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async post(
    @common.Param() params: PostWhereUniqueInput
  ): Promise<Post | null> {
    const result = await this.service.post({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },

        title: true,
        description: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePost(
    @common.Param() params: PostWhereUniqueInput,
    @common.Body() data: PostUpdateInput
  ): Promise<Post | null> {
    try {
      return await this.service.updatePost({
        where: params,
        data: {
          ...data,

          userId: data.userId
            ? {
                connect: data.userId,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },

          title: true,
          description: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Post })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePost(
    @common.Param() params: PostWhereUniqueInput
  ): Promise<Post | null> {
    try {
      return await this.service.deletePost({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },

          title: true,
          description: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
