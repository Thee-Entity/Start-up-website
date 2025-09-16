-- INSTRUCTIONS:
-- This script is designed to be run in the Supabase SQL Editor.
-- 1. Go to your Supabase project dashboard.
-- 2. In the left-hand menu, click on "SQL Editor".
-- 3. Click "+ New query".
-- 4. Copy the entire content of this file and paste it into the editor.
-- 5. Click the "RUN" button to create all the tables and policies.

-- 1. Contacts Table
-- This table stores submissions from the contact form on your website.
-- It captures visitor inquiries and messages.
CREATE TABLE contacts (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject TEXT,
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
-- Row Level Security for contacts table
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert for contact form" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin full access" ON contacts FOR ALL USING (auth.role() = 'service_role');

-- 2. Newsletter Subscribers Table
-- Manages the list of users who sign up for your newsletter.
CREATE TABLE newsletter_subscribers (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);
-- Row Level Security for newsletter_subscribers table
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert for newsletter subscriptions" ON newsletter_subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow admin full access" ON newsletter_subscribers FOR ALL USING (auth.role() = 'service_role');

-- 3. Posts Table
-- Stores blog articles, resources, and insights.
CREATE TABLE posts (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    summary TEXT,
    content TEXT,
    category TEXT,
    image_url TEXT,
    ai_hint VARCHAR(50),
    published_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);
-- Row Level Security for posts table
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to posts" ON posts FOR SELECT USING (true);
CREATE POLICY "Allow admin full access on posts" ON posts FOR ALL USING (auth.role() = 'service_role');


-- 4. Case Studies Table
-- Manages your portfolio of projects and success stories.
CREATE TABLE case_studies (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    client_name VARCHAR(255) NOT NULL,
    problem TEXT NOT NULL,
    solution TEXT NOT NULL,
    result TEXT NOT NULL,
    image_url TEXT,
    category VARCHAR(100),
    published_at TIMESTAMPTZ DEFAULT NOW()
);
-- Row Level Security for case_studies table
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to case studies" ON case_studies FOR SELECT USING (true);
CREATE POLICY "Allow admin full access on case studies" ON case_studies FOR ALL USING (auth.role() = 'service_role');

-- 5. Testimonials Table
-- Stores and displays client feedback and quotes.
CREATE TABLE testimonials (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    client_name VARCHAR(255) NOT NULL,
    quote TEXT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
-- Row Level Security for testimonials table
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Allow admin full access on testimonials" ON testimonials FOR ALL USING (auth.role() = 'service_role');

-- 6. Downloadable Resources Table
-- Manages lead magnets like eBooks, whitepapers, and checklists.
CREATE TABLE downloadable_resources (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    file_url TEXT NOT NULL,
    resource_type VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
-- Row Level Security for downloadable_resources table
ALTER TABLE downloadable_resources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access to downloadable resources" ON downloadable_resources FOR SELECT USING (true);
CREATE POLICY "Allow admin full access on downloadable resources" ON downloadable_resources FOR ALL USING (auth.role() = 'service_role');
