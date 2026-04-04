Add-Type -AssemblyName System.Drawing
$code = @"
using System;
using System.Drawing;
using System.Collections.Generic;

public class ScannerPro {
    public static void ScanAndCrop(string input, string outDir) {
        Bitmap bmp = new Bitmap(input);
        List<Rectangle> rects = new List<Rectangle>();
        
        bool[,] mask = new bool[bmp.Width, bmp.Height];
        for(int y=0; y<bmp.Height; y++) {
            for(int x=0; x<bmp.Width; x++) {
                // Since we made everything white completely transparent, we only care about real colors!
                // Any pixel that is highly transparent (A < 50) is ignored.
                mask[x,y] = bmp.GetPixel(x,y).A > 50;
            }
        }
        
        bool[,] visited = new bool[bmp.Width, bmp.Height];
        for(int y=0; y<bmp.Height; y++) {
            for(int x=0; x<bmp.Width; x++) {
                if(mask[x,y] && !visited[x,y]) {
                    int minX = x, maxX = x, minY = y, maxY = y;
                    Queue<Point> q = new Queue<Point>();
                    q.Enqueue(new Point(x,y));
                    visited[x,y] = true;
                    
                    while(q.Count > 0) {
                        Point p = q.Dequeue();
                        if(p.X < minX) minX = p.X;
                        if(p.X > maxX) maxX = p.X;
                        if(p.Y < minY) minY = p.Y;
                        if(p.Y > maxY) maxY = p.Y;
                        
                        for(int dx = -30; dx <= 30; dx++) {
                            for(int dy = -30; dy <= 30; dy++) {
                                int nx = p.X + dx;
                                int ny = p.Y + dy;
                                if(nx >= 0 && nx < bmp.Width && ny >= 0 && ny < bmp.Height) {
                                    if(mask[nx,ny] && !visited[nx,ny]) {
                                        visited[nx,ny] = true;
                                        q.Enqueue(new Point(nx,ny));
                                    }
                                }
                            }
                        }
                    }
                    
                    // Filter blobs: they must be at least 30x20
                    if (maxX - minX > 30 && maxY - minY > 20) {
                        Rectangle r = new Rectangle(minX - 5, minY - 5, maxX - minX + 11, maxY - minY + 11);
                        if(r.X < 0) r.X = 0;
                        if(r.Y < 0) r.Y = 0;
                        if(r.Right > bmp.Width) r.Width = bmp.Width - r.X;
                        if(r.Bottom > bmp.Height) r.Height = bmp.Height - r.Y;
                        rects.Add(r);
                    }
                }
            }
        }
        
        rects.Sort((a,b) => {
            if (Math.Abs(a.Y - b.Y) > 60) return a.Y.CompareTo(b.Y);
            return a.X.CompareTo(b.X);
        });
        
        int i = 0;
        foreach(var r in rects) {
            Bitmap crop = new Bitmap(r.Width, r.Height);
            using(Graphics g = Graphics.FromImage(crop)) {
                g.DrawImage(bmp, new Rectangle(0,0, r.Width, r.Height), r, GraphicsUnit.Pixel);
            }
            crop.Save(outDir + @"\blob_" + i + ".png", System.Drawing.Imaging.ImageFormat.Png);
            crop.Dispose();
            Console.WriteLine("Generado blob_" + i);
            i++;
        }
        bmp.Dispose();
    }
}
"@
Add-Type -TypeDefinition $code -ReferencedAssemblies System.Drawing
[ScannerPro]::ScanAndCrop("c:\sucarne\assets\images\logos\marcas_grid_perfect.png", "c:\sucarne\assets\images\logos")
Write-Host "Pristine scan complete!"
