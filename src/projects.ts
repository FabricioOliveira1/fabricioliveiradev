export interface projectsProps {
  id: number;
  name: string;
  description: string;
  languages: string[];
  githubLink: string; 
  pageLink: string;
  backImage: string;  
  readMeLink: string;
}

export const projects: projectsProps[] =
  [
    {
      id: 1,
      name: "Hora Certa Med",
      description: "Uma agenda inteligente para o gerenciamento e organização do uso de medicamentos controlados.",
      languages: [
        "React Native",
        "Expo",
      ],
      githubLink: "https://github.com/FabricioOliveira1/hora-certa-med",
      pageLink: "https://expo.dev/preview/update?message=Corrigido+bug+no+campo+de+cadastro+de+medicamento%2C+e+corrigido+bug+da+area+da+tela+entre+android+e+ios&updateRuntimeVersion=1.0.0&createdAt=2025-07-18T16%3A36%3A28.249Z&slug=exp&projectId=0c50762d-b0c8-43a2-8a6f-bd75abf9c4ce&group=34c20dcd-32a4-46ff-9d00-915d1975a73b",
      backImage: "hora-certa-med.png",
      readMeLink: "https://github.com/FabricioOliveira1/hora-certa-med/blob/main/README.md"
    }
  ]