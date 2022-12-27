'use client'

import { Formik } from 'formik'
import * as Yup from 'yup'
import { Input, Textarea } from '@components/form'
import Button from '@components/Button'
import useProposal from 'hooks/useProposal'
import { useState } from 'react'
import parse from 'html-react-parser'
import { map } from 'lodash'

const schema = Yup.object({
  description: Yup.string().required(),
})

const Home = () => {
  const { generateProposal } = useProposal()
  const [proposal, setProposal] = useState<string[] | null>(null)

  return (
    <div className="container mx-auto p-16 sm:p-4 md:p-8">
      <h1 className="text-2xl font-bold text-gray-900">Proposal Writer</h1>
      <p className="text-gray-700">Create a proposal for a job in 20 seconds</p>
      <Formik
        initialValues={{ clientName: '', description: '' }}
        validationSchema={schema}
        onSubmit={(v) =>
          generateProposal.mutate(v, {
            onSuccess: (res) => {
              console.log(res, 'here')
            },
          })
        }
      >
        {({ handleSubmit }) => (
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <Input name="clientName" label="Client Name" />
            <Textarea name="description" label="Job Description" rows={5} />
            <Button
              type="submit"
              color="secondary"
              loading={generateProposal.isLoading}
            >
              Generate Proposal
            </Button>
          </form>
        )}
      </Formik>
      <div className="mt-8 text-gray-700">
        {proposal &&
          proposal.map((t, tIndex) => (
            <p key={tIndex}>{parse(t.replace(/\n/g, '<br />'))}</p>
          ))}
      </div>
    </div>
  )
}

export default Home
