import { Tip } from "./types";

export const TipsCollection: Record<string, Tip[]> = {
  projectCreation: [{
    title: "Did you know?",
    content: "It’s easier to find the projects when you organize them into workspaces using Label Studio Enterprise.",
    closable: true,
    link: {
      label: "Learn more",
      url: "https://docs.humansignal.com/guide/manage_projects#Create-workspaces-to-organize-projects"
    }
  }, {
    title: "Unlock faster access provisioning",
    content: "Streamline assigning staff to multiple projects by assigning them to workspaces in Label Studio Enterprise.",
    closable: true,
    link: {
      label: "Learn more",
      url: "https://docs.humansignal.com/guide/manage_projects#Add-or-remove-members-to-a-workspace"
    }
  }, {
    title: "Did you know?",
    content: "Users with the Manager role can supervise a set of projects by assigning them to workspaces in Label Studio Enterprise.",
    closable: true,
    link: {
      label: "Learn more",
      url: "https://docs.humansignal.com/guide/manage_users#Roles-in-Label-Studio-Enterprise"
    }
  }, {
    title: "Did you know?",
    content: "You can control access to specific projects and workspaces for internal team members and external annotators using Label Studio Enterprise.",
    closable: true,
    link: {
      label: "Learn more",
      url: "https://docs.humansignal.com/guide/manage_users#Roles-in-Label-Studio-Enterprise"
    }
  }, {
    title: "Did you know?",
    content: "You can use or modify dozens or templates to configure your labeling UI, or create a custom configuration from scratch using simple XML-like tag",
    closable: true,
    link: {
      label: "Learn more",
      url: "https://labelstud.io/guide/setup"
    }
  }, {
    title: "Did you know?",
    content: "You can label tasks with collaborators by setting the minimum number of annotations to more than one. ",
    closable: true,
    link: {
      label: "Learn more",
      url: "https://labelstud.io/guide/labeling#Label-with-collaborators"
    }
  }]
}
