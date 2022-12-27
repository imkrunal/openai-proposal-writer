import openai from '@lib/open-ai'
import { useMutation } from '@tanstack/react-query'

type Proposal = {
  clientName?: string
  description: string
}

const generateProposalTemplate = (proposal: Proposal) => {
  return `Generate an upwork job proposal for below job:\n Include topics such as \n 1. Personalized Introduction (Give introduction of me and include experience related to job) \n 2. Address the problem \n 3. Offer a solution that satisfies the requirement \n 4. Request a video call for better understanding of requirement  \n 5. Closing with confidence. \n Don't include those as titles \n ${
    proposal.clientName && `Client's name is: ${proposal.clientName}`
  } Job Description: \n${proposal.description}`
}

const useProposal = () => {
  const generateProposal = useMutation(async (data: Proposal) => {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      temperature: 0.7,
      max_tokens: 1000,
      prompt: generateProposalTemplate(data),
    })
    // const response = {
    //   data: {
    //     id: 'cmpl-6RyVIeFZBPwIMeyC522cG3xTKxssz',
    //     object: 'text_completion',
    //     created: 1672125452,
    //     model: 'text-davinci-003',
    //     choices: [
    //       {
    //         text: '\nDear [Name],\n\nI am a startup founder looking for a Frontend developer to join our team. We have a Figma design ready and the task is to spin up a single page app by using NextJS. As proficiency in NextJS is a must, I am excited to offer you the chance to make important design decisions and gain real life experience of web development through this project.\n\nI am particularly interested in candidates who are college students or looking for an internship opportunity as I believe that these individuals have the most to gain from such an experience. If you are able to complete the task successfully, I am more than happy to provide you with a great review for your work.\n\nIf you are interested in discussing this opportunity further, please do not hesitate to get in touch. I look forward to hearing from you.\n\nSincerely,\n[Your Name]',
    //         index: 0,
    //         logprobs: null,
    //         finish_reason: 'stop',
    //       },
    //     ],
    //     usage: {
    //       prompt_tokens: 130,
    //       completion_tokens: 179,
    //       total_tokens: 309,
    //     },
    //   },
    //   status: 200,
    //   statusText: '',
    //   headers: {
    //     'cache-control': 'no-cache, must-revalidate',
    //     'content-length': '1111',
    //     'content-type': 'application/json',
    //   },
    //   config: {
    //     transitional: {
    //       silentJSONParsing: true,
    //       forcedJSONParsing: true,
    //       clarifyTimeoutError: false,
    //     },
    //     transformRequest: [null],
    //     transformResponse: [null],
    //     timeout: 0,
    //     xsrfCookieName: 'XSRF-TOKEN',
    //     xsrfHeaderName: 'X-XSRF-TOKEN',
    //     maxContentLength: -1,
    //     maxBodyLength: -1,
    //     headers: {
    //       Accept: 'application/json, text/plain, */*',
    //       'Content-Type': 'application/json',
    //       'User-Agent': 'OpenAI/NodeJS/3.1.0',
    //       Authorization:
    //         'Bearer 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',
    //     },
    //     method: 'post',
    //     data: '{"model":"text-davinci-003","temperature":0.7,"max_tokens":1000,"prompt":"Generate an upwork job proposal for below proposal: I am a startup founder who is looking for a Frontend developer in our team. You will get a chance to make important design decisions and have a real life experience of web development through this project.\\nI have a Figma design ready, you just have to spin up the single page app by using nextjs.\\nSo proficiency in nextjs is a must.\\n\\nPriority will be given to college students and someone who is looking for an internship.\\nAfter the completion of task if you give promised result then I will not hesitate to give you review as per your task.\\n"}',
    //     url: 'https://api.openai.com/v1/completions',
    //   },
    //   request: {},
    // }

    return response.data
  })

  return { generateProposal }
}

export default useProposal
