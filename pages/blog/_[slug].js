import Grid from "./../../styles/Grid.module.scss";
import Layout from '../../src/components/Layout';

export default function BlogPost() {
    return (
        <>
            <Layout>
                <section id="about-section" className={`about-section ${Grid.wrapper}`}>
                    <div className={`${Grid.centered}`}>
                        <h1>3 Strategies For Effective Cross-Team Collaboration</h1>
                        <p>This post was originally drafted as a talk for CSSConf, which I sadly had to back out of speaking at. In lieu of the talk itself, I thought I’d instead publish a torrent of thoughts on the titled subject. And let’s not ignore the fact that this formatting may in fact be better, given its proximity to the subject at hand. This will be read on a vast number of browsers, in people’s hands and at their desks, and in anywhere between a few months and a few years, many of the facts pointed out herein will be false or irrelevant. It’s an exciting and frustrating time to be enthusiastic about typography on the web. Let’s dig in.</p>
                        <h2>Preface</h2>
                        <p>Hi. For those of you who don’t know me, I’m Daniel. Those who do know me probably know me because of Animate.css. Believe it or not, I do work on things besides CSS animations. Most of that work is done at Dropbox, where I’m a Designer. I also maintain Ragged Write, a blog about typography (though I’m not very good at that—type news is slow); Onword, a place to write; and Just My Type, a collection of web font pairings. I’ve also written about web type for Typecast a few times. In case you can’t yet tell, I’m kind of into typography.</p>
                        <p>This obsession, combined with my curiosity with and attraction to the web, naturally led me to the topic for my talk today. Being a typoholic on the web is hard; as with layouts, we have the unpredictable nature of the web and its various browsers dilly-dallying with our typographic styles, with discrepancies both small and large across any number of platforms, devices, and screens. But things have improved in recent years, and continue to do so daily. Here, I thought it might be nice or interesting or scary to take a stock-check of typography on the web as it exists today. Let’s go through this together.</p>
                        <h2>The State of The Union</h2>
                        <p>Any Graphic Designers should probably get all of their laughter out of the way while they can. The cold, hard truth is; typography on the web stinks. Let’s take a look at today’s workflow. We’re going to design a website.</p>
                        <p>Unless I want to use Verdana, Georgia, Times New Roman, or Arial, my type choices are pretty much restricted to those available through a number of services. There’s Typekit, which is owned by Adobe and, well, smells like Adobe; Fontdeck, which is admittedly not exactly a painless service due to it’s pay-per-font restrictions which only work for corporations who are unlikely to flex on their typographic choices; Google Fonts, which—though comprehensive—is severely lacking in both features and quality; H&Co.’s Cloud.Typography1, which has perhaps the best catalogue, though is out of many people’s budget and comes with a performance penalty (500kb is about as small as you’ll get for a good pairing from H&Co.); Adobe web fonts, which is basically just Typekit/Google Fonts on Adoberoids; a multitude of other options which are either too expensive or have far too high technical constraints and payloads; and, last but not least, self-hosting. Don’t even get me started on the complexities and caveats of self-hosting.</p>
                        <p>That’s a lot of choices. Are we having fun yet?</p>
                        <p>Let’s go with Typekit. It’s (relatively speaking) cheap, easy to set up, and has limited control (which means limited opportunities for screw-ups.) Typekit has a wonderful catalogue of typefaces from a vast array of foundries, two of which you’re seeing here now—Leitura News and Franklin Gothic URW.</p>
                    </div>
                </section>
            </Layout>
            <style jsx>{`
                .about-section {
                    padding: var(--sp-xl) 0 0;
                    
                }

                .about-section > div {
                    padding-bottom: var(--sp-xxl);
                }

                .profile-img {
                    margin: var(--sp-xl) auto;
                    width: 100%;
                    max-width: 400px;
                }

                h2, h3, h4 {
                    margin-top: var(--sp-xl);
                }
            `}</style>
        </>
    )
}
