export type JobStatus =
  | 'wishlist'
  | 'applied'
  | 'interview'
  | 'offer'
  | 'rejected'

export interface Job {
  id: string
  company: string
  position: string
  status: JobStatus
  location?: string
  salary?: string
  description?: string
  url?: string
  notes?: string
  applied_date?: string
  created_at: string
  updated_at: string
  user_id: string
}

export interface CreateJobInput {
  company: string
  position: string
  status: JobStatus
  location?: string
  salary?: string
  description?: string
  url?: string
  notes?: string
  applied_date?: string
}

export interface UpdateJobInput extends Partial<CreateJobInput> {
  id: string
}
