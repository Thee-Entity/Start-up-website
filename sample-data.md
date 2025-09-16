# Sample Data for Thee Entity Supabase Backend

You can use the following SQL commands to populate your database tables with some initial data. Copy the statements and run them in your Supabase SQL Editor.

## Sample Blog Posts

```sql
INSERT INTO posts (title, summary, category, image_url, ai_hint, content, published_at)
VALUES 
(
  'How SMEs in Kenya Can Leverage AI to Compete',
  'A deep dive into affordable AI tools and strategies that can level the playing field for small and medium-sized businesses.',
  'Business',
  'https://picsum.photos/seed/post1/600/400',
  'small business',
  'The digital landscape is evolving, and AI is at the forefront of this transformation. For Small and Medium Enterprises (SMEs) in Kenya, the adoption of AI is not a luxury but a strategic necessity to remain competitive. This article explores practical and affordable AI tools that can help you automate operations, enhance customer engagement, and make data-driven decisions without breaking the bank.',
  '2024-09-15T10:00:00Z'
),
(
  'The Future of Education: How AI is Transforming Schools',
  'Exploring the impact of automation on administration, personalized learning, and the future of educational institutions.',
  'Education',
  'https://picsum.photos/seed/post2/600/400',
  'education technology',
  'Artificial Intelligence is reshaping the education sector by offering innovative solutions to age-old challenges. From automating tedious administrative tasks like attendance and grading to providing personalized learning paths for students, AI is empowering educators to create more effective and engaging learning environments. Discover how schools are integrating AI to prepare students for a digital-first future.',
  '2024-09-14T10:00:00Z'
),
(
  'Top 5 Automation Tools That Can Save Your Business Time & Money',
  'Discover our top picks for automation software that can streamline your daily operations, boost productivity, and drive growth.',
  'Automation',
  'https://picsum.photos/seed/post3/600/400',
  'automation tools',
  'In the fast-paced world of business, efficiency is key. Automation tools are the secret weapon for businesses looking to optimize their workflows, reduce manual errors, and free up valuable time for strategic initiatives. In this post, we review the top five automation tools that can have an immediate impact on your sales, marketing, and operational processes.',
  '2024-09-13T10:00:00Z'
);
```
