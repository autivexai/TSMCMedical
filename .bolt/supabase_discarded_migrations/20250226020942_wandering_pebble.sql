/*
  # Create contact form submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `company_name` (text)
      - `phone_number` (text)
      - `service` (text)
      - `additional_info` (text)
      - `contact_method` (text)
      - `contact_time` (text)
      - `created_at` (timestamptz)
      - `status` (text) - For tracking submission status

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  company_name text NOT NULL,
  phone_number text NOT NULL,
  service text NOT NULL,
  additional_info text,
  contact_method text NOT NULL,
  contact_time text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new submissions
CREATE POLICY "Allow anonymous submissions" ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only allow authenticated users (admins) to view submissions
CREATE POLICY "Allow authenticated users to view submissions" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);