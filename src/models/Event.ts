import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Event", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    type: t.exposeString("type"),
    shortDescription: t.exposeString("shortDescription"),
    longDescription: t.exposeString("longDescription"),
    createdAt: t.expose("createdAt", { type: "Date" }),
    images: t.exposeStringList("images"),
    customerDate: t.exposeString("customerDate"),
  }),
});

builder.queryField("events", (t) =>
  t.prismaField({
    type: ["Event"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.event.findMany({ ...query }),
  })
);

builder.queryField("eventsById", (t) =>
  t.prismaField({
    type: ["Event"],
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const { id } = _args;
      return prisma.event.findMany({ ...query, where: { id } });
    },
  })
);
builder.queryField("eventsByType", (t) =>
  t.prismaField({
    type: ["Event"],
    args: {
      type: t.arg.string({ required: true }),
    },
    resolve: (query, _parent, _args, _ctx, _info) => {
      const { type } = _args;
      return prisma.event.findMany({ ...query, where: { type } });
    },
  })
);

builder.mutationField("createEvent", (t) =>
  t.prismaField({
    type: "Event",
    args: {
      title: t.arg.string({ required: true }),
      type: t.arg.string({ required: true }),
      shortDescription: t.arg.string({ required: true }),
      longDescription: t.arg.string({ required: true }),
      images: t.arg.stringList({ required: true }),
      customerDate: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const {
        title,
        type,
        shortDescription,
        longDescription,
        customerDate,
        images,
      } = args;

      return prisma.event.create({
        ...query,
        data: {
          title,
          type,
          shortDescription,
          longDescription,
          customerDate,
          images,
        },
      });
    },
  })
);

builder.mutationField("deleteEvent", (t) =>
  t.prismaField({
    type: "Event",
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { id } = args;

      return prisma.event.delete({
        ...query,
        where: {
          id,
        },
      });
    },
  })
);

builder.mutationField("updateEvent", (t) =>
  t.prismaField({
    type: "Event",
    args: {
      id: t.arg.string({ required: true }),
      title: t.arg.string({ required: true }),
      type: t.arg.string({ required: true }),
      shortDescription: t.arg.string({ required: true }),
      longDescription: t.arg.string({ required: true }),
      images: t.arg.stringList({ required: true }),
      customerDate: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const {
        title,
        type,
        shortDescription,
        longDescription,
        customerDate,
        images,
        id,
      } = args;

      return prisma.event.update({
        ...query,
        where: {
          id,
        },
        data: {
          title,
          type,
          shortDescription,
          longDescription,
          customerDate,
          images,
        },
      });
    },
  })
);
