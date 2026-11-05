export const config={
  "id": "links",
  "repo": "link-in-bio-template",
  "title": "Sam Rivera",
  "heading": "All the good places.",
  "intro": "A sample home for projects, writing and the ways to stay in touch.",
  "noun": "link",
  "plural": "links",
  "titleField": "title",
  "publishing": true,
  "linkLabel": "Visit",
  "fields": [
    {
      "key": "title",
      "label": "Link title",
      "type": "text",
      "required": true
    },
    {
      "key": "description",
      "label": "Description",
      "type": "textarea",
      "required": true
    },
    {
      "key": "link",
      "label": "Destination",
      "type": "url",
      "required": true
    },
    {
      "key": "state",
      "label": "Publication state",
      "type": "select",
      "required": true,
      "options": [
        "Draft",
        "Published"
      ],
      "default": "Draft"
    }
  ],
  "settings": [
    {
      "key": "name",
      "label": "Profile name",
      "default": "Alex Morgan",
      "type": "text",
      "required": true
    },
    {
      "key": "headline",
      "label": "Headline",
      "default": "A few good places.",
      "type": "text",
      "required": true
    },
    {
      "key": "about",
      "label": "Profile bio",
      "default": "Design, notes and things worth sharing.",
      "type": "textarea",
      "required": true
    }
  ]
};
