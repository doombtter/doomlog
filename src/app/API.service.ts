/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateBlog: OnCreateBlogSubscription;
  onUpdateBlog: OnUpdateBlogSubscription;
  onDeleteBlog: OnDeleteBlogSubscription;
  onCreatePost: OnCreatePostSubscription;
  onUpdatePost: OnUpdatePostSubscription;
  onDeletePost: OnDeletePostSubscription;
  onCreateComment: OnCreateCommentSubscription;
  onUpdateComment: OnUpdateCommentSubscription;
  onDeleteComment: OnDeleteCommentSubscription;
  onCreateSections: OnCreateSectionsSubscription;
  onUpdateSections: OnUpdateSectionsSubscription;
  onDeleteSections: OnDeleteSectionsSubscription;
};

export type CreateBlogInput = {
  id?: string | null;
  name: string;
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelBlogConditionInput | null> | null;
  or?: Array<ModelBlogConditionInput | null> | null;
  not?: ModelBlogConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Blog = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: ModelPostConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items?: Array<Post | null> | null;
  nextToken?: string | null;
};

export type Post = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  reg_date: string;
  content?: ModelSectionsConnection | null;
  blog?: Blog | null;
  comments?: ModelCommentConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelSectionsConnection = {
  __typename: "ModelSectionsConnection";
  items?: Array<Sections | null> | null;
  nextToken?: string | null;
};

export type Sections = {
  __typename: "Sections";
  id: string;
  postID: string;
  scontent: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items?: Array<Comment | null> | null;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  postID: string;
  post?: Post | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBlogInput = {
  id: string;
  name?: string | null;
};

export type DeleteBlogInput = {
  id: string;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  blogID: string;
  reg_date: string;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  blogID?: ModelIDInput | null;
  reg_date?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  blogID?: string | null;
  reg_date?: string | null;
};

export type DeletePostInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  postID: string;
  content: string;
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type UpdateCommentInput = {
  id: string;
  postID?: string | null;
  content?: string | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type CreateSectionsInput = {
  id?: string | null;
  postID: string;
  scontent: string;
  picture: string;
};

export type ModelSectionsConditionInput = {
  postID?: ModelIDInput | null;
  scontent?: ModelStringInput | null;
  picture?: ModelStringInput | null;
  and?: Array<ModelSectionsConditionInput | null> | null;
  or?: Array<ModelSectionsConditionInput | null> | null;
  not?: ModelSectionsConditionInput | null;
};

export type UpdateSectionsInput = {
  id: string;
  postID?: string | null;
  scontent?: string | null;
  picture?: string | null;
};

export type DeleteSectionsInput = {
  id: string;
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelBlogFilterInput | null> | null;
  or?: Array<ModelBlogFilterInput | null> | null;
  not?: ModelBlogFilterInput | null;
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection";
  items?: Array<Blog | null> | null;
  nextToken?: string | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  blogID?: ModelIDInput | null;
  reg_date?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModelSectionsFilterInput = {
  id?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  scontent?: ModelStringInput | null;
  picture?: ModelStringInput | null;
  and?: Array<ModelSectionsFilterInput | null> | null;
  or?: Array<ModelSectionsFilterInput | null> | null;
  not?: ModelSectionsFilterInput | null;
};

export type CreateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  reg_date: string;
  content?: {
    __typename: "ModelSectionsConnection";
    nextToken?: string | null;
  } | null;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  reg_date: string;
  content?: {
    __typename: "ModelSectionsConnection";
    nextToken?: string | null;
  } | null;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  reg_date: string;
  content?: {
    __typename: "ModelSectionsConnection";
    nextToken?: string | null;
  } | null;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    reg_date: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    reg_date: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  postID: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    reg_date: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateSectionsMutation = {
  __typename: "Sections";
  id: string;
  postID: string;
  scontent: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSectionsMutation = {
  __typename: "Sections";
  id: string;
  postID: string;
  scontent: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSectionsMutation = {
  __typename: "Sections";
  id: string;
  postID: string;
  scontent: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
};

export type GetBlogQuery = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBlogsQuery = {
  __typename: "ModelBlogConnection";
  items?: Array<{
    __typename: "Blog";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  reg_date: string;
  content?: {
    __typename: "ModelSectionsConnection";
    nextToken?: string | null;
  } | null;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    reg_date: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  postID: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    reg_date: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items?: Array<{
    __typename: "Comment";
    id: string;
    postID: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetSectionsQuery = {
  __typename: "Sections";
  id: string;
  postID: string;
  scontent: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
};

export type ListSectionsQuery = {
  __typename: "ModelSectionsConnection";
  items?: Array<{
    __typename: "Sections";
    id: string;
    postID: string;
    scontent: string;
    picture: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: {
    __typename: "ModelPostConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  reg_date: string;
  content?: {
    __typename: "ModelSectionsConnection";
    nextToken?: string | null;
  } | null;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  reg_date: string;
  content?: {
    __typename: "ModelSectionsConnection";
    nextToken?: string | null;
  } | null;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  reg_date: string;
  content?: {
    __typename: "ModelSectionsConnection";
    nextToken?: string | null;
  } | null;
  blog?: {
    __typename: "Blog";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    reg_date: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    reg_date: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  postID: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    reg_date: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSectionsSubscription = {
  __typename: "Sections";
  id: string;
  postID: string;
  scontent: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSectionsSubscription = {
  __typename: "Sections";
  id: string;
  postID: string;
  scontent: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSectionsSubscription = {
  __typename: "Sections";
  id: string;
  postID: string;
  scontent: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBlog(
    input: CreateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<CreateBlogMutation> {
    const statement = `mutation CreateBlog($input: CreateBlogInput!, $condition: ModelBlogConditionInput) {
        createBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBlogMutation>response.data.createBlog;
  }
  async UpdateBlog(
    input: UpdateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<UpdateBlogMutation> {
    const statement = `mutation UpdateBlog($input: UpdateBlogInput!, $condition: ModelBlogConditionInput) {
        updateBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBlogMutation>response.data.updateBlog;
  }
  async DeleteBlog(
    input: DeleteBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<DeleteBlogMutation> {
    const statement = `mutation DeleteBlog($input: DeleteBlogInput!, $condition: ModelBlogConditionInput) {
        deleteBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBlogMutation>response.data.deleteBlog;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          reg_date
          content {
            __typename
            nextToken
          }
          blog {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          reg_date
          content {
            __typename
            nextToken
          }
          blog {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          reg_date
          content {
            __typename
            nextToken
          }
          blog {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            reg_date
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            reg_date
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            reg_date
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async CreateSections(
    input: CreateSectionsInput,
    condition?: ModelSectionsConditionInput
  ): Promise<CreateSectionsMutation> {
    const statement = `mutation CreateSections($input: CreateSectionsInput!, $condition: ModelSectionsConditionInput) {
        createSections(input: $input, condition: $condition) {
          __typename
          id
          postID
          scontent
          picture
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSectionsMutation>response.data.createSections;
  }
  async UpdateSections(
    input: UpdateSectionsInput,
    condition?: ModelSectionsConditionInput
  ): Promise<UpdateSectionsMutation> {
    const statement = `mutation UpdateSections($input: UpdateSectionsInput!, $condition: ModelSectionsConditionInput) {
        updateSections(input: $input, condition: $condition) {
          __typename
          id
          postID
          scontent
          picture
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSectionsMutation>response.data.updateSections;
  }
  async DeleteSections(
    input: DeleteSectionsInput,
    condition?: ModelSectionsConditionInput
  ): Promise<DeleteSectionsMutation> {
    const statement = `mutation DeleteSections($input: DeleteSectionsInput!, $condition: ModelSectionsConditionInput) {
        deleteSections(input: $input, condition: $condition) {
          __typename
          id
          postID
          scontent
          picture
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSectionsMutation>response.data.deleteSections;
  }
  async GetBlog(id: string): Promise<GetBlogQuery> {
    const statement = `query GetBlog($id: ID!) {
        getBlog(id: $id) {
          __typename
          id
          name
          posts {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBlogQuery>response.data.getBlog;
  }
  async ListBlogs(
    filter?: ModelBlogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBlogsQuery> {
    const statement = `query ListBlogs($filter: ModelBlogFilterInput, $limit: Int, $nextToken: String) {
        listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBlogsQuery>response.data.listBlogs;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          blogID
          reg_date
          content {
            __typename
            nextToken
          }
          blog {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            blogID
            reg_date
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            reg_date
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            content
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async GetSections(id: string): Promise<GetSectionsQuery> {
    const statement = `query GetSections($id: ID!) {
        getSections(id: $id) {
          __typename
          id
          postID
          scontent
          picture
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSectionsQuery>response.data.getSections;
  }
  async ListSections(
    filter?: ModelSectionsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSectionsQuery> {
    const statement = `query ListSections($filter: ModelSectionsFilterInput, $limit: Int, $nextToken: String) {
        listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            postID
            scontent
            picture
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSectionsQuery>response.data.listSections;
  }
  OnCreateBlogListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBlog">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBlog {
        onCreateBlog {
          __typename
          id
          name
          posts {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBlog">>
  >;

  OnUpdateBlogListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBlog">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBlog {
        onUpdateBlog {
          __typename
          id
          name
          posts {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBlog">>
  >;

  OnDeleteBlogListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBlog">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBlog {
        onDeleteBlog {
          __typename
          id
          name
          posts {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBlog">>
  >;

  OnCreatePostListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          blogID
          reg_date
          content {
            __typename
            nextToken
          }
          blog {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreatePost">>
  >;

  OnUpdatePostListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          blogID
          reg_date
          content {
            __typename
            nextToken
          }
          blog {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdatePost">>
  >;

  OnDeletePostListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          blogID
          reg_date
          content {
            __typename
            nextToken
          }
          blog {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          comments {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeletePost">>
  >;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            reg_date
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateComment">>
  >;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            reg_date
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateComment">>
  >;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          postID
          post {
            __typename
            id
            title
            blogID
            reg_date
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteComment">>
  >;

  OnCreateSectionsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSections">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSections {
        onCreateSections {
          __typename
          id
          postID
          scontent
          picture
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSections">>
  >;

  OnUpdateSectionsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSections">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSections {
        onUpdateSections {
          __typename
          id
          postID
          scontent
          picture
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSections">>
  >;

  OnDeleteSectionsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSections">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSections {
        onDeleteSections {
          __typename
          id
          postID
          scontent
          picture
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSections">>
  >;
}
