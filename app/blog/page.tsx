import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User } from "lucide-react"

const blogPosts = [
    {
        id: 1,
        title: "YKS Matematik Çalışırken Yapılan 5 Büyük Hata",
        excerpt: "Sınav maratonunda öğrencilerimin en sık yaptığı hataları ve bunlardan nasıl kaçınabileceğinizi derledim.",
        date: "15 Ekim 2024",
        author: "Baran Gürbüz",
        image: "/blog-mistakes.png",
        category: "Sınav Rehberi"
    },
    {
        id: 2,
        title: "Matematik Korkusu Nasıl Yenilir?",
        excerpt: "Matematik gerçekten zor mu yoksa yanlış yöntemlerle mi çalışıyorsunuz? İşte matematiği sevmenin yolları.",
        date: "22 Eylül 2024",
        author: "Baran Gürbüz",
        image: "/blog-anxiety.png",
        category: "Motivasyon"
    },
    {
        id: 3,
        title: "Günde Kaç Soru Çözülmeli?",
        excerpt: "Nicelik mi nitelik mi? Başarılı öğrencilerimin çalışma rutinlerinden örneklerle ideal soru çözüm stratejileri.",
        date: "10 Eylül 2024",
        author: "Baran Gürbüz",
        image: "/blog-questions.png",
        category: "Çalışma Taktikleri"
    },
]

export default function BlogPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog & Rehberlik</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Matematik, sınav stratejileri ve eğitim üzerine paylaştığım kısa notlar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Card key={post.id} className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full z-10">
                                        {post.category}
                                    </div>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                </div>

                                <CardHeader>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                        <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</div>
                                        <div className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</div>
                                    </div>
                                    <CardTitle className="text-xl text-foreground line-clamp-2">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </CardContent>
                                {/* Footer Removed (Read More button removed) */}
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
