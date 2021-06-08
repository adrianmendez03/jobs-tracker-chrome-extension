export interface Job {
  company: string
  title: string
  location: string
  description: string
}

// INDEED
export const indeed: Job = {
  company:
    '//*[@id="main-content"]/section[1]/section[2]/div/div[1]/div/h4/div[1]/span[1]/a',
  title: '//*[@id="main-content"]/section[1]/section[2]/div/div[1]/div/h1',
  location:
    '//*[@id="viewJobSSRRoot"]/div[1]/div[3]/div[1]/div[2]/div/div/div[3]',
  description: '//*[@id="jobDescriptionText"]',
}

export const linkedin: Job = {
  company:
    '//*[@id="main-content"]/section[1]/section[2]/div/div[1]/div/h4/div[1]/span[1]/a',
  title: '//*[@id="main-content"]/section[1]/section[2]/div/div[1]/div/h1',
  location:
    '//*[@id="main-content"]/section[1]/section[2]/div/div[1]/div/h4/div[1]/span[2]',
  description:
    '//*[@id="main-content"]/section[1]/section[3]/div[2]/section/div',
}
