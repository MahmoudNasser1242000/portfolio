import { defineField, defineType } from "sanity";

export default defineType({
    name: "skills",
    type: "document",
    title: "skills",
    fields: [
        defineField({
            name: "label",
            type: "string",
            title: "label",
            validation: (Rule) => [
                Rule.required(),
                Rule.min(3),
                Rule.max(100).error("label must be at least 100 char"),
            ],
        }),

        defineField({
            name: "image",
            type: "image",
            title: "image",
        }),
    ],
});
