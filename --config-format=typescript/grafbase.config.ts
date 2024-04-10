import { graph, config, auth } from '@grafbase/sdk';

const User = graph.Standalone().model('User', {
  name: graph.string().length({ min: 2, max: 100 }),
  email: graph.string().unique(),
  avatarUrl: graph.url(),
  description: graph.string().length({ min: 2, max: 1000 }).optional(),
  githubUrl: graph.url().optional(),
  linkedinUrl: graph.url().optional(),
  projects: graph.relation(() => Project).list().optional(),
}).auth((rules) => {
  rules.public().read();
});

const Project = graph.Standalone().model('Project', {
  title: graph.string().length({ min: 3 }),
  description: graph.string(),
  image: graph.url(),
  liveSiteUrl: graph.url(),
  githubUrl: graph.url(),
  category: graph.string().search(),
  createdBy: graph.relation(() => User),
}).auth((rules) => {
  rules.public().read();
  rules.private().create().delete().update();
});
