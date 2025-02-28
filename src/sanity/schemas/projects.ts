import { defineField, defineType } from "sanity";

export default defineType({
    name: "projects",
    type: "document",
    title: "projects",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "title",
            validation: (Rule) => [
                Rule.required(),
                Rule.min(3).error("label must be at most 100 char"),
                Rule.max(100).error("label must be at least 100 char"),
            ],
        }),

        defineField({
            name: "description",
            type: "string",
            title: "description",
            validation: (Rule) => [
                Rule.required(),
                Rule.min(10).error("label must be at most 10 char"),
                Rule.max(1000).error("label must be at least 1000 char"),
            ],
        }),

        defineField({
            name: "images",
            type: "array",
            title: "images",
            of: [{ type: "image" }],
            validation: (Rule) => [Rule.unique(), Rule.required()], // unique images
        }),

        defineField({
            name: "tags",
            type: "array",
            title: "tags",
            of: [{ type: "string" }],
            validation: (Rule) => [Rule.unique()],
        }),

        defineField({
            name: "demoLink",
            type: "url",
            title: "demo link",
            validation: (Rule) =>
                Rule.uri({
                    scheme: ["http", "https", "ftp"],
                    allowRelative: false,
                    relativeOnly: false,
                }).error("only allow (http, https, ftp)"), // only allow http, https, ftp
        }),

        defineField({
            name: "githubLink",
            type: "array",
            title: "github repository link",
            of: [{
                type: "string", 
                validation: (Rule) => Rule.uri({
                    scheme: ["http", "https", "ftp"],
                    allowRelative: false,
                    relativeOnly: false,
                }).error("only allow (http, https, ftp)"), // only allow http, https, ftp
            }],
            validation: (Rule) => ([
                Rule.unique(),
                Rule.required(),
                Rule.min(1).error("at least one link"),
                Rule.max(2).error("at most 2 links"),
            ]),
        }),

        // defineField({
        //     name: "githubLink",
        //     type: "url",
        //     title: "github repository link",
        //     validation: (Rule) =>
        //         Rule.uri({
        //             scheme: ["http", "https", "ftp"],
        //             allowRelative: false,
        //             relativeOnly: false,
        //         }).error("only allow (http, https, ftp)"), // only allow http, https, ftp
        // }),

        defineField({
            name: "isResponsive",
            type: "boolean",
            title: "is responsive",
            initialValue: true,
        }),

        defineField({
            name: "publishedAt",
            type: "date",
            title: "published at",
            validation: (Rule) => [
                Rule.max(new Date().toDateString()).error("only allow past dates"),
            ], // only allow past dates
        }),
    ],
});
