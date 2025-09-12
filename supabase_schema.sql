-- Supabase Schema for Thee Entity
--
-- Instructions:
-- 1. Navigate to the SQL Editor in your Supabase project dashboard.
-- 2. Click "+ New query".
-- 3. Copy the entire content of this file.
-- 4. Paste it into the query window.
-- 5. Click "Run" to execute the script and create all tables and policies.
--

-- 1. Contacts Table
-- Stores messages submitted through the contact form.
CREATE TABLE IF NOT EXISTS contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);
-- RLS Policy: Only authenticated service roles can read/write contacts.
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow service_role access" ON contacts FOR ALL TO service_role;


-- 2. Newsletter Subscribers Table
-- Manages email addresses for the newsletter.
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMPTZ DEFAULT NOW()
);
-- RLS Policy: Allow public sign-ups, but restrict reads to service roles.
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert" ON newsletter_subscribers FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow service_role read" ON newsletter_subscribers FOR SELECT TO service_role USING (true);


-- 3. Posts Table
-- For blog articles and resources.
CREATE TABLE IF NOT EXISTS posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    summary TEXT,
    content TEXT,
    category VARCHAR(100),
    image_url VARCHAR(255),
    ai_hint VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
-- RLS Policy: Allow public read access for everyone.
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON posts FOR SELECT TO anon USING (true);
CREATE POLICY "Allow admin full access" ON posts FOR ALL TO service_role;


-- 4. Case Studies Table
-- Manages portfolio items and success stories.
CREATE TABLE IF NOT EXISTS case_studies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_type VARCHAR(100),
    problem TEXT NOT NULL,
    solution TEXT NOT NULL,
    result TEXT,
    image_url VARCHAR(255),
    ai_hint VARCHAR(100),
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
-- RLS Policy: Allow public read access.
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON case_studies FOR SELECT TO anon USING (true);
CREATE POLICY "Allow admin full access" ON case_studies FOR ALL TO service_role;


-- 5. Testimonials Table
-- Stores client testimonials.
CREATE TABLE IF NOT EXISTS testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quote TEXT NOT NULL,
    client_name VARCHAR(255),
    client_role VARCHAR(255),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
-- RLS Policy: Allow public read access.
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON testimonials FOR SELECT TO anon USING (true);
CREATE POLICY "Allow admin full access" ON testimonials FOR ALL TO service_role;


-- 6. Downloadable Resources Table
-- Manages lead magnets (eBooks, whitepapers).
CREATE TABLE IF NOT EXISTS downloadable_resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    file_type VARCHAR(50),
    download_url VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
-- RLS Policy: Allow public read access.
ALTER TABLE downloadable_resources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON downloadable_resources FOR SELECT TO anon USING (true);
CREATE POLICY "Allow admin full access" ON downloadable_resources FOR ALL TO service_role;