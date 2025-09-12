-- Supabase Schema for Thee Entity Website

-- 1. Table for Contact Form Submissions
-- This table will store all the messages sent through the contact form.
CREATE TABLE contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE contacts IS 'Stores submissions from the website contact form.';

-- 2. Table for Newsletter Subscribers
-- This table will store the email addresses of users who subscribe to the newsletter.
CREATE TABLE newsletter_subscribers (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE newsletter_subscribers IS 'Manages email addresses for the newsletter.';

-- 3. Table for Blog Posts/Resources
-- This table will store content for the Resources/Blog section.
CREATE TABLE posts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  summary TEXT,
  content TEXT,
  image_url TEXT,
  category TEXT,
  author_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  published_at TIMESTAMPTZ,
  slug TEXT UNIQUE NOT NULL
);

COMMENT ON TABLE posts IS 'Contains all articles for the blog/resources section.';

-- 4. Table for Case Studies
-- This table will manage the case studies/portfolio items.
CREATE TABLE case_studies (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  client_type TEXT NOT NULL, -- e.g., 'SME', 'School'
  problem TEXT NOT NULL,
  solution TEXT NOT NULL,
  result TEXT NOT NULL,
  image_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE case_studies IS 'Stores portfolio case studies.';

-- 5. Table for Testimonials
-- This table will store client testimonials.
CREATE TABLE testimonials (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  quote TEXT NOT NULL,
  client_name TEXT NOT NULL,
  client_role TEXT, -- e.g., 'SME Owner', 'School Principal'
  rating INT CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE testimonials IS 'Stores client testimonials and reviews.';


-- 6. Table for Downloadable Resources (Lead Magnets)
-- This table manages lead magnets like eBooks and whitepapers.
CREATE TABLE downloadable_resources (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL, -- Link to the file in Supabase Storage
  resource_type TEXT, -- e.g., 'eBook', 'Whitepaper'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

COMMENT ON TABLE downloadable_resources IS 'Manages downloadable resources like eBooks and whitepapers.';


-- Enable Row Level Security (RLS) for all tables
-- IMPORTANT: Define policies after creating tables to control access.
-- By default, no one can access the data until policies are created.
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloadable_resources ENABLE ROW LEVEL SECURITY;

-- Example RLS Policy for public read access to posts
-- This allows anyone to read from the 'posts' table.
CREATE POLICY "Allow public read access to posts"
  ON posts FOR SELECT
  USING (TRUE);

-- Example RLS Policy for public read access to case studies
CREATE POLICY "Allow public read access to case studies"
  ON case_studies FOR SELECT
  USING (TRUE);

-- Example RLS Policy for public read access to testimonials
CREATE POLICY "Allow public read access to testimonials"
  ON testimonials FOR SELECT
  USING (TRUE);

-- Example RLS Policy for allowing inserts into the contacts table
CREATE POLICY "Allow anonymous inserts into contacts"
  ON contacts FOR INSERT
  WITH CHECK (TRUE);

-- Example RLS Policy for allowing inserts into the newsletter_subscribers table
CREATE POLICY "Allow anonymous inserts into newsletter subscribers"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (TRUE);
