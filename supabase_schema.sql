-- Thee Entity Supabase Schema
-- version 1.0

-- INSTRUCTIONS:
-- 1. In your Supabase project, navigate to the "SQL Editor" page.
-- 2. Click "+ New query".
-- 3. Copy the entire content of this file.
-- 4. Paste it into the query editor.
-- 5. Click the "Run" button.
-- Do NOT use the "Import data from spreadsheet" feature for this file.

-- 1. Table for Contact Form Submissions
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject TEXT,
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT now()
);
-- RLS Policy for contacts
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert for anyone" ON contacts FOR INSERT WITH CHECK (true);


-- 2. Table for Newsletter Subscribers
CREATE TABLE newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMPTZ DEFAULT now()
);
-- RLS Policy for newsletter_subscribers
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert for anyone" ON newsletter_subscribers FOR INSERT WITH CHECK (true);


-- 3. Table for Blog Posts / Resources
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    summary TEXT,
    content TEXT,
    image_url VARCHAR(255),
    category VARCHAR(100),
    published_at TIMESTAMPTZ DEFAULT now(),
    author_name VARCHAR(255)
);
-- RLS Policy for posts
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON posts FOR SELECT USING (true);


-- 4. Table for Case Studies
CREATE TABLE case_studies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_type VARCHAR(100),
    problem TEXT NOT NULL,
    solution TEXT NOT NULL,
    result TEXT NOT NULL,
    image_url VARCHAR(255),
    published_at TIMESTAMPTZ DEFAULT now()
);
-- RLS Policy for case_studies
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON case_studies FOR SELECT USING (true);


-- 5. Table for Testimonials
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quote TEXT NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    client_role VARCHAR(255),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    published_at TIMESTAMPTZ DEFAULT now()
);
-- RLS Policy for testimonials
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON testimonials FOR SELECT USING (true);


-- 6. Table for Downloadable Resources (Lead Magnets)
CREATE TABLE downloadable_resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    file_url VARCHAR(255) NOT NULL,
    resource_type VARCHAR(100) -- e.g., 'eBook', 'Whitepaper'
);
-- RLS Policy for downloadable_resources
ALTER TABLE downloadable_resources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON downloadable_resources FOR SELECT USING (true);
