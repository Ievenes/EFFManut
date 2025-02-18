export type User = {
  id: string;
  email: string;
  role: 'admin' | 'technician' | 'requester';
  created_at: string;
};

export type MaintenanceRequest = {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  requester_id: string;
  technician_id?: string;
  created_at: string;
  updated_at: string;
  completed_at?: string;
};