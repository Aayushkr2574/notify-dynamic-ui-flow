
import React from "react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      image: "/lovable-uploads/blog-1.jpg",
      title: "Organize your digital assets with a new methodology",
      excerpt: "Creating psychology in digital products using TOOLS.",
      author: "Andrew Miller",
      date: "May 10, 2022",
      readTime: "5 min read",
    },
    {
      image: "/lovable-uploads/blog-2.jpg",
      title: "Organize your digital assets with a new methodology",
      excerpt: "How vaudeville killed modern architecture.",
      author: "John Doe",
      date: "May 8, 2022",
      readTime: "10 min read",
    },
    {
      image: "/lovable-uploads/blog-3.jpg",
      title: "Organize your digital assets with a new methodology",
      excerpt: "How ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Jane Smith",
      date: "May 5, 2022",
      readTime: "8 min read",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lookscout-gray max-w-2xl mx-auto">
            Create customized posts with rich content using all components available in the editor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white border border-lookscout-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-lookscout-gray mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span>{post.author}</span>
                  <span className="text-lookscout-gray">{post.date} • {post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-secondary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
