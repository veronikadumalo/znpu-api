import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("PageInfo", {
  fields: (t) => ({
    id: t.exposeID("id"),
    uaAddress: t.exposeString("uaAddress"),
    plAddress: t.exposeString("plAddress"),
    phoneNuber: t.exposeString("phoneNuber"),
    email: t.exposeString("email"),
    additionalEmail: t.exposeString("additionalEmail"),
    facebookLink: t.exposeString("facebookLink"),
    uaPageTitle: t.exposeString("uaPageTitle"),
    plPageTitle: t.exposeString("plPageTitle"),
  }),
});

builder.queryField("pageInfo", (t) =>
  t.prismaField({
    type: ["PageInfo"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.pageInfo.findMany({ ...query }),
  })
);

builder.mutationField("updatePageInfo", (t) =>
  t.prismaField({
    type: "PageInfo",
    args: {
      id: t.arg.string({ required: true }),
      uaAddress: t.arg.string({ required: true }),
      plAddress: t.arg.string({ required: true }),
      phoneNuber: t.arg.string({ required: true }),
      email: t.arg.string({ required: true }),
      additionalEmail: t.arg.string({ required: true }),
      facebookLink: t.arg.string({ required: true }),
      uaPageTitle: t.arg.string({ required: true }),
      plPageTitle: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const {
        id,
        uaAddress,
        plAddress,
        phoneNuber,
        email,
        additionalEmail,
        facebookLink,
        uaPageTitle,
        plPageTitle,
      } = args;

      return prisma.pageInfo.update({
        ...query,
        where: {
          id,
        },
        data: {
          uaAddress: uaAddress,
          plAddress: plAddress,
          phoneNuber: phoneNuber,
          email: email,
          additionalEmail: additionalEmail,
          facebookLink: facebookLink,
          uaPageTitle: uaPageTitle,
          plPageTitle: plPageTitle,
        },
      });
    },
  })
);
