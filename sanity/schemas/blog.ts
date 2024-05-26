import { title } from "process";

export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title of Blog article',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug of your blog article',
      type: 'slug',
      options: {
        source: 'title',
        
      }
    },
    {
      name:"titleImage",
      type:"image",
      title:"Title Image"
    },
    {
      name:"smallDescription",
      type:"text",
      title:"Small Description"
    },
    {
      name:"content",
      type:"array",
      title:"Content",
      of:[
        {
          type:"block",
        }
      ]
    }
  ]
}