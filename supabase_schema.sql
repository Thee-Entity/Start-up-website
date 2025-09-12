-- Supabase SQL Schema for Thee-Entity Website
-- Instructions:
-- 1. Navigate to the SQL Editor in your Supabase project dashboard.
-- 2. Click "New query".
-- 3. Copy the entire content of this file and paste it into the editor.
-- 4. Click "Run" to execute the script and create all the tables.

-- Table to store contact form submissions
CREATE TABLE public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject TEXT,
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON public.contacts FOR SELECT USING (true);
CREATE POLICY "Allow public write access" ON public.contacts FOR INSERT WITH CHECK (true);


-- Table to store newsletter subscribers
CREATE TABLE public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) NOT NULL UNIQUE,
    subscribed_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON public.newsletter_subscribers FOR SELECT USING (true);
CREATE POLICY "Allow public write access" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);


-- Table for blog posts and resources
CREATE TABLE public.posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    summary TEXT,
    content TEXT,
    image_url TEXT,
    ai_hint VARCHAR(100),
    author_name TEXT,
    category VARCHAR(50),
    published_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTamptz DEFAULT now()
);
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON public.posts FOR SELECT USING (true);


-- Table for case studies/portfolio
CREATE TABLE public.case_studies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    client_type VARCHAR(100),
    problem TEXT,
    solution TEXT,
    result TEXT,
    image_url TEXT,
    ai_hint VARCHAR(100),
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON public.case_studies FOR SELECT USING (true);


-- Table for client testimonials
CREATE TABLE public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quote TEXT NOT NULL,
    client_name VARCHAR(255),
    client_role VARCHAR(255),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON public.testimonials FOR SELECT USING (true);


-- Table for downloadable resources (lead magnets)
CREATE TABLE public.downloadable_resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    file_type VARCHAR(50),
    download_url TEXT NOT NULL, -- This could be a URL to a file in Supabase Storage
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.downloadable_resources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON public.downloadable_resources FOR SELECT USING (true);