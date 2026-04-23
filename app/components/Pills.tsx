"use client"
import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const ProductsPage: NextPage = () => {
  const [showAll, setShowAll] = useState(false);

  const productCategories = [
    {
      id: "illuminated",
      category: "Illuminated & LED",
      items: ["Neon signs", "LED backlit signs", "LED message signs", "3D illuminated signs", "Lightboxes"]
    },
    {
      id: "business",
      category: "Business & Office",
      items: ["Directory Boards", "Office signs", "Room and door signs", "Reception signs", "Window frostings", "Hygiene and safety signs"]
    },
    {
      id: "events",
      category: "Events & Promotional",
      items: ["Retractable banner signs", "Pull up banners", "Teardrop flags", "Marquees", "Posters", "Stickers and labels"]
    },
    {
      id: "large-format",
      category: "Large Format & Outdoor",
      items: ["Coroplast signs", "Wall graphics", "Large format printing", "Hoarding signage", "Vinyl signs", "Store front signs"]
    },
    {
      id: "vehicle",
      category: "Vehicle Graphics",
      items: ["Reflective vehicle signage", "Trailer graphics", "Car wraps", "Fleet graphics", "Vehicle lettering"]
    },
    {
      id: "custom",
      category: "Custom & Digital",
      items: ["Digital printing", "Custom signs", "Cafe and bars signs"]
    }
  ];

  const visibleCategories = showAll ? productCategories : productCategories.slice(0, 3);

  return (
    <>
      <Head>
        <title>Capabilities | Premium Branding</title>
      </Head>

      <div className="page-container">
        <div className="content-wrapper">
          
          {/* --- Left Column: Context --- */}
          <div className="sidebar">
            <div className="accent-line" />
            <h1 className="main-title">
              Crafting <br className="desktop-only" /> <span className='text-[#ffb92d]'>Visual</span> <br className="desktop-only" /> Authority.
            </h1>
            <p className="description">
              We don&apos;t just print signs; we engineer physical brand experiences through light, vinyl, and scale.
            </p>
          </div>

          {/* --- Right Column: The Experience Feed --- */}
          <div className="feed">
            <div className="categories-list">
              {visibleCategories.map((group, index) => (
                <div 
                  key={index} 
                  id={group.id}
                  className="group-card"
                >
                  <div className="card-inner">
                    <span className="index-number">
                      / 0{index + 1}
                    </span>
                    
                    <div className="card-content">
                      <h2 className="category-title">
                        {group.category}
                      </h2>
                      
                      <div className="tags-container">
                        {group.items.map((item, i) => (
                          <a 
                            key={i} 
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                            className="tag-link"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {!showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="view-more-btn"
              >
                View Full Capabilities Portfolio
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-container {
          min-height: 100vh;
          background-color: #091242;
          color: #FFFFFF;
          font-family: 'Inter', sans-serif;
          padding: 80px 24px;
          display: flex;
          justify-content: center;
        }

        .content-wrapper {
          max-width: 1300px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
        }

        .sidebar {
          position: sticky;
          top: 100px;
          height: fit-content;
        }

        .accent-line {
          width: 40px; 
          height: 2px; 
          background-color:#ffb92d; 
          margin-bottom: 24px;
        }

        .main-title {
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin-bottom: 32px;
          color: #F8F9FB;
        }

        .description {
          font-size: 18px; 
          color: #94A3B8; 
          line-height: 1.6; 
          max-width: 380px;
          font-weight: 300;
        }

        .feed {
          width: 100%;
        }

        .categories-list {
          display: flex;
          flex-direction: column;
        }

        .group-card {
          padding: 50px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .card-inner {
          display: flex;
          align-items: flex-start;
          gap: 30px;
        }

        .index-number {
          font-size: 14px; 
          font-family: monospace; 
          color: #ffb92d; 
          margin-top: 8px;
        }

        .card-content {
          flex: 1;
        }

        .category-title {
          font-size: 28px; 
          font-weight: 600; 
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }

        .tags-container {
          display: flex; 
          flex-wrap: wrap; 
          gap: 10px;
        }

        .tag-link {
          padding: 8px 16px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 13px;
          color: #94A3B8;
          background-color: rgba(255, 255, 255, 0.05);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .tag-link:hover {
          background-color: #ffb92d;
          color: white;
          border-color:#ffb92d;
        }

        .view-more-btn {
          margin-top: 60px;
          background: none;
          border: 1px solid #FFFFFF;
          color: #FFFFFF;
          padding: 18px 40px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
        }

        .view-more-btn:hover {
          background-color: #FFFFFF;
          color: #08103a;
        }

        .group-card:hover {
          padding-left: 15px;
          border-bottom-color:#ffb92d;
        }

        .group-card:hover .category-title {
          color: #ffb92d;
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sidebar {
            position: relative;
            top: 0;
            margin-bottom: 40px;
          }
          .desktop-only {
            display: none;
          }
          .main-title {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .page-container {
            padding: 60px 20px;
          }
          .card-inner {
            flex-direction: column;
            gap: 10px;
          }
          .index-number {
            margin-top: 0;
          }
          .category-title {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default ProductsPage;