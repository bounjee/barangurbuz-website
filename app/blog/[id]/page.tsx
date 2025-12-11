import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, User, Tag, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
    {
        id: 1,
        title: "YKS Matematik Çalışırken Yapılan 5 Büyük Hata",
        image: "/2.jpg",
        date: "15 Ekim 2024",
        author: "Baran Gürbüz",
        category: "Sınav Rehberi",
        readTime: "5 dk okuma",
        content: `
      <p class="lead">YKS süreci, sadece bilgi biriktirme değil, aynı zamanda strateji yönetme sürecidir. Matematik netlerinizi artırmak istiyorsanız, sadece çok çalışmak yetmez; doğru çalışmanız gerekir.</p>

      <h2>1. Temel Kavramları Atlamak</h2>
      <p>Birçok öğrenci hemen zor sorulara geçmek ister. Oysa matematiğin temeli atılmadan bina inşa edilemez. Üslü sayılar, köklü sayılar ve çarpanlara ayırma gibi konuları tam oturtmadan türev-integral çözmeye çalışmak zaman kaybıdır. Önce temeli sağlam atın.</p>
      
      <h2>2. Sadece Okuyarak Çalışmak</h2>
      <p>Matematik seyirci sporu değildir. Kalem oynatmadan, sadece çözüm videoları izleyerek matematik öğrenilmez. Kendi elinizle çözmediğiniz her soru, sınavda karşınıza çıktığında size yabancı gelecektir. Mutlaka yazarak çalışın.</p>

      <h2>3. Yapılamayan Soruların Peşine Düşmemek</h2>
      <p>Denemelerde yanlış yaptığınız veya boş bıraktığınız sorular, aslında sizin en değerli hazinenizdir. Çünkü size neyi bilmediğinizi onlar söyler. Bu soruları "aman boşver" diyip geçmeyin. Mutlaka hocanıza sorun ve mantığını öğrenin.</p>

      <h2>4. Formül Ezberlemek</h2>
      <p>Formülleri ezberlemek yerine mantığını kavramaya çalışın. Formülün nereden geldiğini bilirseniz, sınav anında unutsanız bile kendiniz çıkarabilirsiniz. Ezber unutulur, mantık kalıcıdır.</p>

      <h2>5. Plansız Çalışmak</h2>
      <p>Bugün canım geometri istedi, yarın problem çözerim demekle olmaz. Haftalık ve aylık bir planınız olmalı. Hangi konuyu ne zaman bitireceğiniz belli olmalıdır. Disiplin, motivasyondan daha önemlidir.</p>
    `
    }
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
    // Safe param handling
    const paramId = params?.id ? parseInt(params.id) : 1
    // If id is NaN or not found, default to first post
    const post = blogPosts.find((p) => p.id === paramId) || blogPosts[0]

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 pt-32 pb-20">
                <article className="container mx-auto px-6 md:px-12 lg:px-24">

                    {/* Back Button */}
                    <Button asChild variant="ghost" className="mb-8 hover:bg-transparent p-0 -ml-2">
                        <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Tüm Yazılara Dön
                        </Link>
                    </Button>

                    {/* Article Header */}
                    <header className="max-w-4xl mx-auto mb-10 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                            <span className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                <Tag className="w-3 h-3" /> {post.category}
                            </span>
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-2 text-muted-foreground">
                            <div className="w-8 h-8 rounded-full bg-secondary overflow-hidden">
                                <img src="/barangurbuz.jpg" alt={post.author} className="w-full h-full object-cover" />
                            </div>
                            <span className="font-medium text-foreground">{post.author}</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="max-w-3xl mx-auto">
                        <div
                            className={`
                prose prose-lg dark:prose-invert max-w-none 
                prose-headings:text-foreground prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-foreground prose-strong:font-semibold
                prose-li:text-muted-foreground
              `}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Share/Footer of Article */}
                        <div className="mt-16 pt-8 border-t border-border">
                            <p className="text-center text-muted-foreground italic">
                                Bu yazıyı faydalı bulduysanız arkadaşlarınızla paylaşmayı unutmayın.
                            </p>
                        </div>
                    </div>

                </article>
            </main>

            <Footer />
        </div>
    )
}
