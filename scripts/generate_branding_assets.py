import os
from PIL import Image, ImageDraw, ImageFont

# Set up directories
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, "..", "public")

# Helper to draw shield path
def draw_shield(draw, center_x, center_y, size, color1, color2):
    # Approximating a shield shape using polygons/curves
    # Draw a gradient shield by drawing filled polygons or circles
    half = size // 2
    points = [
        (center_x, center_y - half),  # Top point
        (center_x + half, center_y - half + size // 4),  # Top right shoulder
        (center_x + half, center_y),  # Right edge
        (center_x, center_y + half),  # Bottom point
        (center_x - half, center_y),  # Left edge
        (center_x - half, center_y - half + size // 4),  # Top left shoulder
    ]
    
    # We can fill with color1 or a solid color, let's use a nice filled shield
    draw.polygon(points, fill=color1)
    
    # Inner smaller shield for a cooler border look
    inner_half = int(half * 0.85)
    inner_points = [
        (center_x, center_y - inner_half),
        (center_x + inner_half, center_y - inner_half + int(size * 0.85) // 4),
        (center_x + inner_half, center_y),
        (center_x, center_y + inner_half),
        (center_x - inner_half, center_y),
        (center_x - inner_half, center_y - inner_half + int(size * 0.85) // 4),
    ]
    draw.polygon(inner_points, fill=color2)

def get_best_font(size):
    # Try finding bold fonts on Windows
    font_names = ["arialbd.ttf", "arial.ttf", "segoeuib.ttf", "tahomabd.ttf"]
    for font_name in font_names:
        try:
            return ImageFont.truetype(font_name, size)
        except IOError:
            continue
    return ImageFont.load_default()

def create_favicon_png(size, output_path):
    print(f"Generating favicon {size}x{size}...")
    img = Image.new("RGBA", (size, size), color=(11, 16, 32, 255))  # #0b1020
    draw = ImageDraw.Draw(img)
    
    # Draw glowing shield in background
    draw_shield(draw, size // 2, size // 2, int(size * 0.75), (239, 68, 68, 255), (15, 23, 42, 255)) # #ef4444 red shield, slate-900 center
    
    # Add text "LQ"
    font_size = int(size * 0.35)
    font = get_best_font(font_size)
    text = "LQ"
    
    # Get text width/height
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_w = text_bbox[2] - text_bbox[0]
    text_h = text_bbox[3] - text_bbox[1]
    
    # Center text
    tx = (size - text_w) // 2
    ty = (size - text_h) // 2 - int(size * 0.03) # slightly higher
    
    # Draw text with red-orange accent
    draw.text((tx, ty), text, font=font, fill=(249, 115, 22, 255)) # Orange text
    img.save(output_path, "PNG")

def create_og_image():
    print("Generating social share card (og-image.jpg) 1200x630...")
    width, height = 1200, 630
    img = Image.new("RGB", (width, height), color=(11, 16, 32)) # #0b1020
    draw = ImageDraw.Draw(img)
    
    # Draw simple background gradient (horizontal lines with gradual colors)
    # from #0b1020 to #1a1a2e (deep indigo to dark violet)
    for y in range(height):
        ratio = y / height
        r = int(11 + (26 - 11) * ratio)
        g = int(16 + (26 - 16) * ratio)
        b = int(32 + (46 - 32) * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
        
    # Draw nice gaming circles in background for premium look
    draw.ellipse([width // 2 - 400, height // 2 - 400, width // 2 + 400, height // 2 + 400], outline=(239, 68, 68, 15), width=2)
    draw.ellipse([width // 2 - 250, height // 2 - 250, width // 2 + 250, height // 2 + 250], outline=(249, 115, 22, 25), width=4)
    
    # Draw central shield icon
    draw_shield(draw, width // 2, height // 2 - 80, 220, (239, 68, 68, 255), (15, 23, 42, 255))
    
    # Text inside shield: "LQ"
    font_lq = get_best_font(100)
    text_lq = "LQ"
    lq_bbox = draw.textbbox((0, 0), text_lq, font=font_lq)
    lq_w = lq_bbox[2] - lq_bbox[0]
    lq_h = lq_bbox[3] - lq_bbox[1]
    draw.text((width // 2 - lq_w // 2, height // 2 - 80 - lq_h // 2 - 10), text_lq, font=font_lq, fill=(249, 115, 22, 255))
    
    # Brand Name "Liên Quân Hub"
    font_title = get_best_font(72)
    text_title_1 = "Liên Quân"
    text_title_2 = " Hub"
    
    # Measure width
    t1_bbox = draw.textbbox((0, 0), text_title_1, font=font_title)
    t2_bbox = draw.textbbox((0, 0), text_title_2, font=font_title)
    t1_w = t1_bbox[2] - t1_bbox[0]
    t2_w = t2_bbox[2] - t2_bbox[0]
    total_title_w = t1_w + t2_w
    
    title_y = height // 2 + 70
    start_x = (width - total_title_w) // 2
    
    draw.text((start_x, title_y), text_title_1, font=font_title, fill=(255, 255, 255))
    draw.text((start_x + t1_w, title_y), text_title_2, font=font_title, fill=(239, 68, 68)) # Red Hub
    
    # Tagline
    font_tagline = get_best_font(36)
    text_tagline = "Hub Video & Tin tức Liên Quân Mobile"
    tagline_bbox = draw.textbbox((0, 0), text_tagline, font=font_tagline)
    tagline_w = tagline_bbox[2] - tagline_bbox[0]
    draw.text(((width - tagline_w) // 2, height // 2 + 165), text_tagline, font=font_tagline, fill=(203, 213, 225)) # Slate-300
    
    # Subtext
    font_subtext = get_best_font(26)
    text_subtext = "Tier List  ·  Bảng Tướng  ·  Video mới nhất"
    subtext_bbox = draw.textbbox((0, 0), text_subtext, font=font_subtext)
    subtext_w = subtext_bbox[2] - subtext_bbox[0]
    draw.text(((width - subtext_w) // 2, height // 2 + 220), text_subtext, font=font_subtext, fill=(249, 115, 22)) # Orange
    
    # Save as JPEG
    img.save(os.path.join(PUBLIC_DIR, "og-image.jpg"), "JPEG", quality=95)
    print("Successfully saved og-image.jpg!")

def main():
    os.makedirs(PUBLIC_DIR, exist_ok=True)
    
    # Generate favicons
    create_favicon_png(192, os.path.join(PUBLIC_DIR, "icon-192.png"))
    create_favicon_png(512, os.path.join(PUBLIC_DIR, "icon-512.png"))
    create_favicon_png(180, os.path.join(PUBLIC_DIR, "apple-touch-icon.png"))
    
    # Generate social card
    create_og_image()
    
    print("=== BRANDING GENERATION SUCCESSFUL ===")

if __name__ == "__main__":
    main()
