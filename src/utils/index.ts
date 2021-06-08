import { Job, indeed, linkedin } from "../domains"

export const fetchScrapePaths = (url: string): Job | null => {
  const domain = url.split(".")[1]
  switch (domain) {
    case "linkedin":
      return linkedin
    case "indeed":
      return indeed
    default:
      return null
  }
}
