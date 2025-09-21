import { JobDetails } from "@/components/job-details"
import { Navigation } from "@/components/navigation"

interface JobPageProps {
  params: {
    id: string
  }
}

export default function JobPage({ params }: JobPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <JobDetails jobId={params.id} />
      </main>
    </div>
  )
}
