import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Person", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    email: t.exposeString("email"), // deparmentId: t.exposeString,
    avatar: t.expose("avatar", {
      type: "String",
      nullable: true,
    }),
  }),
});

builder.queryField("person", (t) =>
  t.prismaField({
    type: ["Person"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.person.findMany({ ...query }),
  })
);

builder.mutationField("deletePerson", (t) =>
  t.prismaField({
    type: "Person",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id } = args;

      return prisma.person.delete({
        ...query,
        where: {
          id,
        },
      });
    },
  })
);

builder.mutationField("createPerson", (t) =>
  t.prismaField({
    type: "Person",
    args: {
      name: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
      deparmentId: t.arg.string({ required: true }),
      avatar: t.arg.string({ required: false }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { name, email, deparmentId, avatar } = args;

      return prisma.person.create({
        ...query,
        data: {
          name,
          email,
          deparmentId,
          avatar,
        },
      });
    },
  })
);

builder.mutationField("updatePerson", (t) =>
  t.prismaField({
    type: "Person",
    args: {
      name: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
      id: t.arg.string({ required: true }),
      avatar: t.arg.string({ required: false }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { name, email, id, avatar } = args;

      return prisma.person.update({
        ...query,
        where: {
          id,
        },
        data: {
          name,
          email,
          avatar,
        },
      });
    },
  })
);
