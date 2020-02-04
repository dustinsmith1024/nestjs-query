/*! For license information please see 7660363c.9965c2b8.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(1),o=n(9),r=(n(0),n(173)),i=n(176),l=n(177),s={title:"Relations"},b={id:"graphql/relations",title:"Relations",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/graphql/relations.mdx",permalink:"/nestjs-query/docs/graphql/relations",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/website/docs/graphql/relations.mdx",sidebar:"docs",previous:{title:"Mutations",permalink:"/nestjs-query/docs/graphql/mutations"},next:{title:"Types",permalink:"/nestjs-query/docs/graphql/types"}},p=[{value:"Relation Options",id:"relation-options",children:[]},{value:"Examples",id:"examples",children:[{value:"One Relation",id:"one-relation",children:[]},{value:"Many Relation",id:"many-relation",children:[]},{value:"Custom Relation Name",id:"custom-relation-name",children:[]},{value:"Disable Reads",id:"disable-reads",children:[]},{value:"Disable Updates",id:"disable-updates",children:[]},{value:"Disable Removes",id:"disable-removes",children:[]},{value:"Guards, Pipes and Filters",id:"guards-pipes-and-filters",children:[]}]}],m={rightToc:p},c="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(c,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When using the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./resolvers#crudresolver"}),"CRUDResolver")," you can specify relations that should be exposed for the DTO using the ",Object(r.b)("inlineCode",{parentName:"p"},"relations")," option."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"relations")," option has two properties."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"one")," - Relations that return a single record. The ",Object(r.b)("inlineCode",{parentName:"li"},"key")," is the name of the ",Object(r.b)("inlineCode",{parentName:"li"},"relation")," and the value contains ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#relation-options"}),"options for the relation"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"many")," - Relations that return multiple records. The ",Object(r.b)("inlineCode",{parentName:"li"},"key")," is the name of the ",Object(r.b)("inlineCode",{parentName:"li"},"relation")," and the value contains ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#relation-options"}),"options for the relation"),".")),Object(r.b)("h3",{id:"relation-options"},"Relation Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DTO")," - The relation DTO. This is the ",Object(r.b)("inlineCode",{parentName:"li"},"@ObjectType")," that will be used for read, update and remove endpoints."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"relationName")," - The name of the relation to use when looking up the relation from the ",Object(r.b)("inlineCode",{parentName:"li"},"QueryService")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"nullable")," - Set to ",Object(r.b)("inlineCode",{parentName:"li"},"true")," if the relation is nullable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disableRead")," -  Set to ",Object(r.b)("inlineCode",{parentName:"li"},"true")," to disable read operations."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disableUpdate")," -  Set to ",Object(r.b)("inlineCode",{parentName:"li"},"true")," to disable update operations."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disableRemove")," -  Set to ",Object(r.b)("inlineCode",{parentName:"li"},"true")," to disable remove operations."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"guards=[]")," - An array of ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.nestjs.com/guards"}),"guards")," to add to ",Object(r.b)("inlineCode",{parentName:"li"},"update")," and ",Object(r.b)("inlineCode",{parentName:"li"},"remove")," endpoints."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"interceptors=[]")," - An array of ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.nestjs.com/interceptors"}),"interceptors")," to add to ",Object(r.b)("inlineCode",{parentName:"li"},"update")," and ",Object(r.b)("inlineCode",{parentName:"li"},"remove")," endpoints."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pipes=[]")," - An array of ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.nestjs.com/pipes"}),"pipes")," to add to ",Object(r.b)("inlineCode",{parentName:"li"},"update")," and ",Object(r.b)("inlineCode",{parentName:"li"},"remove")," endpoints."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filters=[]")," - An array of ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.nestjs.com/exception-filters"}),"filters")," to add to ",Object(r.b)("inlineCode",{parentName:"li"},"update")," and ",Object(r.b)("inlineCode",{parentName:"li"},"remove")," endpoints.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," ",Object(r.b)("inlineCode",{parentName:"p"},"guards"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pipes"),", ",Object(r.b)("inlineCode",{parentName:"p"},"interceptors")," and ",Object(r.b)("inlineCode",{parentName:"p"},"filters")," will not work by default with ",Object(r.b)("inlineCode",{parentName:"p"},"read")," endpoints. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nestjs/graphql/issues/295"}),"https://github.com/nestjs/graphql/issues/295")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("p",null,"In the following examples we are going to use the following ",Object(r.b)("inlineCode",{parentName:"p"},"typeorm")," entities and DTOs."),Object(r.b)(i.a,{defaultValue:"todoitementity",values:[{label:"TodoItemEntity",value:"todoitementity"},{label:"TodoItemDTO",value:"todoitemdto"},{label:"SubTaskEntity",value:"subtaskentity"},{label:"SubTaskDTO",value:"subtaskdto"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"todoitementity",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany } from 'typeorm';\nimport { SubTaskEntity } from '../sub-task/sub-task.entity';\n\n@Entity()\nexport class TodoItemEntity {\n  @PrimaryGeneratedColumn()\n  id!: string;\n\n  @Column()\n  title!: string;\n\n  @Column()\n  completed!: boolean;\n\n  @OneToMany(\n    () => SubTaskEntity,\n    subTask => subTask.todoItem,\n  )\n  subTasks!: SubTaskEntity[];\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n\n"))),Object(r.b)(l.a,{value:"todoitemdto",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from 'type-graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n"))),Object(r.b)(l.a,{value:"subtaskentity",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  Entity,\n  PrimaryGeneratedColumn,\n  Column,\n  CreateDateColumn,\n  UpdateDateColumn,\n  ObjectType,\n  ManyToOne,\n  JoinColumn,\n} from 'typeorm';\nimport { TodoItemEntity } from '../todo-item/todo-item.entity';\n\n@Entity()\nexport class SubTaskEntity {\n  @PrimaryGeneratedColumn()\n  id!: string;\n\n  @Column()\n  title!: string;\n\n  @Column()\n  completed!: boolean;\n\n  @Column({ nullable: false })\n  todoItemId!: string;\n\n  @ManyToOne(\n    (): ObjectType<TodoItemEntity> => TodoItemEntity,\n    td => td.subTasks,\n    { onDelete: 'CASCADE', nullable: false },\n  )\n  @JoinColumn()\n  todoItem!: TodoItemEntity;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n\n"))),Object(r.b)(l.a,{value:"subtaskdto",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from 'type-graphql';\n\n@ObjectType('SubTask')\nexport class SubTaskDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  todoItemId!: string;\n}\n\n\n")))),Object(r.b)("h3",{id:"one-relation"},"One Relation"),Object(r.b)("p",null,"Based on the entity and DTO definitions above we can create a ",Object(r.b)("inlineCode",{parentName:"p"},"SubTask")," resolver using the ",Object(r.b)("inlineCode",{parentName:"p"},"relations.one")," options."),Object(r.b)("p",null,"When specifying a ",Object(r.b)("inlineCode",{parentName:"p"},"one")," relation a couple of endpoints will automatically be generated. In this example the following are generated."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"subTask.todoItem")," - A ",Object(r.b)("inlineCode",{parentName:"li"},"query")," to retrieve the ",Object(r.b)("inlineCode",{parentName:"li"},"SubTasks")," ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setTodoItemOnSubTask")," - A ",Object(r.b)("inlineCode",{parentName:"li"},"mutation")," to set the ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem")," on a ",Object(r.b)("inlineCode",{parentName:"li"},"SubTask"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"removeTodoItemFromSubTask")," - A ",Object(r.b)("inlineCode",{parentName:"li"},"mutation")," to remove a ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),"/",Object(r.b)("inlineCode",{parentName:"li"},"SubTask")," relation.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NOTE")," This does not typically remove either record just breaks the relation.")))),Object(r.b)("p",null,"In this example we ",Object(r.b)("inlineCode",{parentName:"p"},"disableRemove")," because ",Object(r.b)("inlineCode",{parentName:"p"},"todoItem")," is not nullable."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../todo-item/dto/todo-item.dto';\nimport { SubTaskDTO } from './dto/sub-task.dto';\nimport { SubTaskService } from './sub-task.service';\n\n@Resolver(() => SubTaskDTO)\nexport class SubTaskResolver extends CRUDResolver(SubTaskDTO, {\n  relations: {\n    one: { todoItem: { DTO: TodoItemDTO, disableRemove: true } },\n  },\n}) {\n  constructor(readonly service: SubTaskService) {\n    super(service);\n  }\n}\n\n")),Object(r.b)("p",null,"In the above example the relations option was set to"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"relations: {\n  one: { todoItem: { DTO: TodoItemDTO, disableRemove: true } },\n}\n")),Object(r.b)("p",null,"This set of options lets ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," know that ",Object(r.b)("inlineCode",{parentName:"p"},"SubTask")," has a single ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," relation. The generated schema will contain a ",Object(r.b)("inlineCode",{parentName:"p"},"SubTask")," type like the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type SubTask {\n  id: ID!\n  title: String!\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n  todoItemId: String!\n  todoItem: TodoItem!\n}\n")),Object(r.b)("p",null,"The following mutations will also be automatically exposed."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  setTodoItemOnSubTask(\n    id: ID!\n    relationId: ID!\n  ): SubTask!\n}\n")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"disableRemove")," was set to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," or not specified a ",Object(r.b)("inlineCode",{parentName:"p"},"removeTodoItemFromSubTask")," mutation would also be exposed with the same arguments as ",Object(r.b)("inlineCode",{parentName:"p"},"setTodoItemOnSubTask"),"."),Object(r.b)("h3",{id:"many-relation"},"Many Relation"),Object(r.b)("p",null,"Based on the entity and DTO definitions above we can create a ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," resolver using the ",Object(r.b)("inlineCode",{parentName:"p"},"relations.many")," options."),Object(r.b)("p",null,"When specifying a ",Object(r.b)("inlineCode",{parentName:"p"},"many")," relation a couple of endpoints will automatically be generated. In this example the following are generated."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"todoItem.subTasks")," - A ",Object(r.b)("inlineCode",{parentName:"li"},"query")," to retrieve a ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItems")," ",Object(r.b)("inlineCode",{parentName:"li"},"SubTasks"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"subTasks")," property will accept a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"../concepts/query"}),"query")," to allow you to filter, page and sort results."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"subTasks")," property will return a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"./types#connectiontype"}),"connection")," to page through results."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addSubTasksToTodoItem")," - A ",Object(r.b)("inlineCode",{parentName:"li"},"mutation")," to add ",Object(r.b)("inlineCode",{parentName:"li"},"SubTasks")," to a ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"removeSubTasksFromTodoItem")," - A ",Object(r.b)("inlineCode",{parentName:"li"},"mutation")," to remove a ",Object(r.b)("inlineCode",{parentName:"li"},"SubTaks")," from a ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NOTE")," This does not typically remove either record just breaks the relation.")))),Object(r.b)("p",null,"In this example we ",Object(r.b)("inlineCode",{parentName:"p"},"disableRemove")," because ",Object(r.b)("inlineCode",{parentName:"p"},"SubTasks")," cannot exist without a ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/dto/sub-task.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  relations: {\n    many: { subTasks: { DTO: SubTaskDTO, disableRemove: true } },\n  },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n")),Object(r.b)("p",null,"In the above example the relations option was set to"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"relations: {\n  many: { subTasks: { DTO: SubTaskDTO, disableRemove: true } },\n}\n")),Object(r.b)("p",null,"This objects tells ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," that the ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," has multiple ",Object(r.b)("inlineCode",{parentName:"p"},"SubTasks"),". The generated schema will contain a ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," type like the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type TodoItem {\n  id: ID!\n  title: String!\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n  subTasks(\n    paging: CursorPaging = { first: 10 }\n\n    filter: SubTaskFilter = {}\n\n    sorting: [SubTaskSort!] = []\n  ): SubTaskConnection!\n}\n")),Object(r.b)("p",null,"The following mutations will also be automatically exposed."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  addSubTasksToTodoItem(\n    id: ID!\n    relationIds: [ID!]!\n  ): TodoItem!\n}\n")),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"disableRemove")," was set to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," or not specified a ",Object(r.b)("inlineCode",{parentName:"p"},"removeSubTasksFromTodoItem")," mutation would also be exposed with the same arguments as ",Object(r.b)("inlineCode",{parentName:"p"},"addSubTasksToTodoItem"),"."),Object(r.b)("h3",{id:"custom-relation-name"},"Custom Relation Name"),Object(r.b)("p",null,"Sometimes you may want to expose a relation that has a different name when persisted from the graphql property. To do this use the ",Object(r.b)("inlineCode",{parentName:"p"},"relationName")," property."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/dto/sub-task.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  relations: {\n    many: { allSubTasks: { DTO: SubTaskDTO, relationName: 'subTasks' } },\n  },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n")),Object(r.b)("p",null,"In this example the ",Object(r.b)("inlineCode",{parentName:"p"},"subTasks")," key will be used to look up the relation from from the ",Object(r.b)("inlineCode",{parentName:"p"},"QueryService")," and ",Object(r.b)("inlineCode",{parentName:"p"},"todoItems.allSubTasks")," will be exposed in the ",Object(r.b)("inlineCode",{parentName:"p"},"graphql")," schema."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type TodoItem {\n  id: ID!\n  title: String!\n  completed: Boolean!\n  created: DateTime!\n  updated: DateTime!\n  allSubTasks(\n    paging: CursorPaging = { first: 10 }\n\n    filter: SubTaskFilter = {}\n\n    sorting: [SubTaskSort!] = []\n  ): SubTaskConnection!\n}\n")),Object(r.b)("h3",{id:"disable-reads"},"Disable Reads"),Object(r.b)("p",null,"To disable the ",Object(r.b)("inlineCode",{parentName:"p"},"read")," ",Object(r.b)("inlineCode",{parentName:"p"},"queries")," you can set the ",Object(r.b)("inlineCode",{parentName:"p"},"disableRead")," option to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/dto/sub-task.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  relations: {\n    many: { subTasks: { DTO: SubTaskDTO, disableRead: true } },\n  },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n")),Object(r.b)("p",null,"In this example only ",Object(r.b)("inlineCode",{parentName:"p"},"addSubTasksToTodoItem")," and ",Object(r.b)("inlineCode",{parentName:"p"},"removeSubTasksFromTodoItem")," will be exposed."),Object(r.b)("h3",{id:"disable-updates"},"Disable Updates"),Object(r.b)("p",null,"To disable the ",Object(r.b)("inlineCode",{parentName:"p"},"update")," ",Object(r.b)("inlineCode",{parentName:"p"},"mutations")," you can set the ",Object(r.b)("inlineCode",{parentName:"p"},"disableUpdate")," option to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/dto/sub-task.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  relations: {\n    many: { subTasks: { DTO: SubTaskDTO, disableUpdates: true } },\n  },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n")),Object(r.b)("p",null,"In this example only ",Object(r.b)("inlineCode",{parentName:"p"},"todoItem.subTasks")," and ",Object(r.b)("inlineCode",{parentName:"p"},"removeSubTasksFromTodoItem")," will be exposed."),Object(r.b)("h3",{id:"disable-removes"},"Disable Removes"),Object(r.b)("p",null,"To disable the ",Object(r.b)("inlineCode",{parentName:"p"},"remove")," ",Object(r.b)("inlineCode",{parentName:"p"},"mutations")," you can set the ",Object(r.b)("inlineCode",{parentName:"p"},"disableRemove")," option to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/dto/sub-task.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  relations: {\n    many: { subTasks: { DTO: SubTaskDTO, disableRemove: true } },\n  },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n\n")),Object(r.b)("p",null,"In this example only ",Object(r.b)("inlineCode",{parentName:"p"},"todoItem.subTasks")," and ",Object(r.b)("inlineCode",{parentName:"p"},"addSubTasksToTodoItem")," will be exposed."),Object(r.b)("h3",{id:"guards-pipes-and-filters"},"Guards, Pipes and Filters"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," ",Object(r.b)("inlineCode",{parentName:"p"},"guards"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pipes"),", ",Object(r.b)("inlineCode",{parentName:"p"},"interceptors")," and ",Object(r.b)("inlineCode",{parentName:"p"},"filters")," will not work by default with ",Object(r.b)("inlineCode",{parentName:"p"},"read")," endpoints. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nestjs/graphql/issues/295"}),"https://github.com/nestjs/graphql/issues/295")),Object(r.b)("p",null,"In this example we'll just demonstrate using a ",Object(r.b)("inlineCode",{parentName:"p"},"guard")," but the same pattern applies for ",Object(r.b)("inlineCode",{parentName:"p"},"pipes"),", ",Object(r.b)("inlineCode",{parentName:"p"},"filters")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"interceptors")),Object(r.b)("p",null,"To set up a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.nestjs.com/guards"}),"guard")," for endpoint you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"guards")," option."),Object(r.b)("p",null,"Assume we have the following auth guard that checks for a certain header and value."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  CanActivate,\n  ExecutionContext,\n  Injectable,\n  Logger,\n} from '@nestjs/common';\nimport { Observable } from 'rxjs';\nimport { GqlExecutionContext } from '@nestjs/graphql';\nimport { AUTH_HEADER_NAME } from './constants';\nimport { config } from './config';\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  private logger = new Logger(AuthGuard.name);\n\n  canActivate(\n    context: ExecutionContext,\n  ): boolean | Promise<boolean> | Observable<boolean> {\n    const ctx = GqlExecutionContext.create(context);\n    const req = ctx.getContext().request;\n    this.logger.log(`Req = ${req.headers}`);\n    return req.headers[AUTH_HEADER_NAME] === config.auth.header;\n  }\n}\n")),Object(r.b)("p",null,"We can then add it to our relations"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { AuthGuard } from '../auth.guard';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemService } from './todo-item.service';\n\nconst guards = [AuthGuard];\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO, {\n  many: { subTasks: { DTO: SubTaskDTO, guards } },\n}) {\n  constructor(readonly service: TodoItemService) {\n    super(service);\n  }\n}\n")),Object(r.b)("p",null,"Now any requests that go to the ",Object(r.b)("inlineCode",{parentName:"p"},"update")," or ",Object(r.b)("inlineCode",{parentName:"p"},"remove")," endpoints will require the guard."))}d.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},m=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,u=m["".concat(i,".").concat(c)]||m[c]||d[c]||r;return n?o.a.createElement(u,l({ref:t},b,{components:n})):o.a.createElement(u,l({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},174:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},176:function(e,t,n){"use strict";n(23),n(17),n(18);var a=n(0),o=n.n(a),r=n(174),i=n.n(r),l=n(118),s=n.n(l),b={left:37,right:39};t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,l=e.values,p=Object(a.useState)(r),m=p[0],c=p[1],d=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===t,className:i()("tab-item",s.a.tabItem,{"tab-item--active":m===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case b.right:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b.left:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(d,e.target,e)},onFocus:function(){return c(t)},onClick:function(){return c(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===m}))[0]))}},177:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);