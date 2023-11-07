import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("File", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    url: t.exposeString("url"),
    subcategoryId: t.exposeString("subcategoryId"),
  }),
});

builder.queryField("files", (t) =>
  t.prismaField({
    type: ["File"],
    args: {
      subcategoryId: t.arg.string({ required: true }),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const { subcategoryId } = _args;
      return prisma.file.findMany({ ...query, where: { subcategoryId } });
    },
  })
);
builder.queryField("filesBySubcategory", (t) =>
  t.prismaField({
    type: ["File"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.file.findMany({ ...query }),
  })
);

builder.mutationField("deleteFile", (t) =>
  t.prismaField({
    type: "File",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id } = args;

      return prisma.file.delete({
        ...query,
        where: {
          id,
        },
      });
    },
  })
);

builder.mutationField("createFile", (t) =>
  t.prismaField({
    type: "File",
    args: {
      title: t.arg.string({ required: true }),
      url: t.arg.string({ required: true }),
      subcategoryId: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { title, url, subcategoryId } = args;

      return prisma.file.create({
        ...query,
        data: {
          title,
          url,
          subcategoryId,
        },
      });
    },
  })
);

builder.mutationField("updateFile", (t) =>
  t.prismaField({
    type: "File",
    args: {
      title: t.arg.string({ required: true }),
      url: t.arg.string({ required: true }),
      subcategoryId: t.arg.string({ required: true }),
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id, title, url, subcategoryId } = args;

      return prisma.file.update({
        ...query,
        where: {
          id,
        },
        data: {
          title,
          url,
          subcategoryId,
        },
      });
    },
  })
);
