import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("HomePageContent", {
  fields: (t) => ({
    id: t.exposeID("id"),
    type: t.exposeString("type"),
    homeTitle: t.exposeString("homeTitle"),
    pageTitle: t.exposeString("pageTitle"),
    shortDescription: t.exposeString("shortDescription"),
    longDescription: t.exposeString("longDescription"),
    imageUrl: t.exposeString("imageUrl"),
  }),
});

builder.queryField("homePageContent", (t) =>
  t.prismaField({
    type: ["HomePageContent"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.homePageContent.findMany({ ...query }),
  })
);

builder.mutationField("updateHomePageInfo", (t) =>
  t.prismaField({
    type: "HomePageContent",
    args: {
      type: t.arg.string({ required: true }),
      homeTitle: t.arg.string({ required: true }),
      pageTitle: t.arg.string({ required: true }),
      shortDescription: t.arg.string({ required: true }),
      longDescription: t.arg.string({ required: true }),
      imageUrl: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const {
        type,
        homeTitle,
        pageTitle,
        shortDescription,
        longDescription,
        imageUrl,
      } = args;

      return prisma.homePageContent.update({
        ...query,
        where: {
          type,
        },
        data: {
          homeTitle,
          pageTitle,
          shortDescription,
          longDescription,
          imageUrl,
        },
      });
    },
  })
);
