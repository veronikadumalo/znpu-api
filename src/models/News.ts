import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("News", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    description: t.exposeString("description"),
    imageUrl: t.exposeString("imageUrl"),
    subtitle: t.exposeString("subtitle"),
    createdAt: t.expose("createdAt", { type: "Date" }),
    updatedAt: t.expose("updatedAt", { type: "Date" }),
  }),
});

builder.queryField("news", (t) =>
  t.prismaField({
    type: ["News"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.news.findMany({ ...query }),
  })
);

builder.mutationField("createNews", (t) =>
  t.prismaField({
    type: "News",
    args: {
      title: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
      imageUrl: t.arg.string({ required: true }),
      subtitle: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { title, description, imageUrl, subtitle } = args;

      return prisma.news.create({
        ...query,
        data: {
          title,
          description,
          imageUrl,
          subtitle,
        },
      });
    },
  })
);

builder.mutationField("deleteNews", (t) =>
  t.prismaField({
    type: "News",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id } = args;

      return prisma.news.delete({
        ...query,
        where: {
          id,
        },
      });
    },
  })
);

builder.mutationField("updateNews", (t) =>
  t.prismaField({
    type: "News",
    args: {
      title: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
      imageUrl: t.arg.string({ required: true }),
      id: t.arg.string({ required: true }),
      subtitle: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { title, description, imageUrl, id, subtitle } = args;

      return prisma.news.update({
        ...query,
        where: { id },
        data: {
          title,
          description,
          imageUrl,
          subtitle,
        },
      });
    },
  })
);
