export interface Job {
  domain: string
  company: string
  title: string
  location: string
  description: string
}

// INDEED
export const indeed: Job = {
  domain: "indeed",
  company:
    '//*[@id="viewJobSSRRoot"]/div/div[3]/div/div/div[1]/div[1]/div[2]/div[1]/div[2]/div/div/div[1]/div',
  title:
    '//*[@id="viewJobSSRRoot"]/div/div[3]/div/div/div[1]/div[1]/div[2]/div[1]/div[1]/h1',
  location:
    '//*[@id="viewJobSSRRoot"]/div/div[3]/div/div/div[1]/div[1]/div[2]/div[1]/div[2]/div/div/div[2]',
  description: '//*[@id="jobDescriptionText"]',
}

export const linkedin: Job = {
  domain: "linkedin",
  company:
    '//*[@id="main-content"]/section[1]/section[2]/div/div[1]/div/h4/div[1]/span[1]/a',
  title: '//*[@id="main-content"]/section[1]/section[2]/div/div[1]/div/h1',
  location:
    '//*[@id="main-content"]/section[1]/section[2]/div/div[1]/div/h4/div[1]/span[2]',
  description: '//*[@id="main-content"]/section[1]/section[3]/div/section/div',
}
