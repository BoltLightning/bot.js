const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "b:";

const token = 'NzM3MTA2NTM5Nzk3NTQ1MDEx.Xx4h9Q.E49arf3B0a1kzmVT2ro7kCbOBGA';

bot.on('ready', () =>{
    console.log('this bot is online!');
    bot.user.setActivity('b: for command activation')
    bot.user.setStatus('online');
    bot.user.setAvatar('https://images-ext-2.discordapp.net/external/2es-OYHMVTWtCJc_-HsZ8ilUkOaxUog1x8MuXHk1re8/https/s-media-cache-ak0.pinimg.com/originals/cb/1b/2c/cb1b2c44013251b65e7d6cc966138e3c.jpg?width=607&height=898');

})

bot.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");

    if(!message.content.startsWith(prefix) || message.author.bot)
    return; 

    const user = message.mentions.users.first();
    


        switch (args[0]) {

            case '.':
                message.channel.send('you need to add a comand, use b:help for the ENTIRE list');
                break; 
             case 'info':
                 message.channel.send('author: Bolt2434, Version 1.0.0, client ID,737106539797545011 Bot token hidded lang, javascript, library discord.js, runner, node.js');
                 break; 
            case 'blackhole':
                message.channel.send('https://contraryperspective.files.wordpress.com/2016/02/mediablackhole.jpg');
                break;
            case 'bolts':
                message.channel.send('https://discord.gg/9WbjbW9');
                break;
            case 'teslas' :
                message.channel.send('http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/09/tesla-model-s-threebatwo.jpg');
                break;
            case 'tesla3':
                message.channel.send('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Tesla_Model_3_parked%2C_front_driver_side.jpg/1200px-Tesla_Model_3_parked%2C_front_driver_side.jpg');
                break;
            case 'teslax':
                message.channel.send('https://i.ytimg.com/vi/urDSWETx2UU/maxresdefault.jpg');
                break;
            case 'teslay':
                message.channel.send('https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/tesla_newd_a_0.jpg?itok=O3BcYXeo');
                break;
            case 'teslac':
                 message.channel.send('https://st.hotrod.com/uploads/sites/5/2019/11/Tesla-Cybertruck-Electric-Pickup-Truck-Front-3-4-View-with-Headlamps-Illuminated.jpg');
                 break;
            case 'teslarn' :
                message.channel.send('https://95octane.com/wp-content/uploads/2017/11/new_tesla_2019_roadster_1.jpg');
                break; 
            case 'teslaro' :
                message.channel.send('https://tse1.mm.bing.net/th?id=OIP.XM9B8dLnnHCbwDo1JNEWYQHaCx&pid=Api&P=0&w=495&h=186');   
                break; 
            case 'help':
                message.channel.send('Prefix b: Commands you can use ban, support, help, teslaro, teslarn, teslac, teslay, teslax, tesla3, teslas, bolts, blackhole, info, youtube, vote, did, support, cement, test, bakeacake, thickskull, comphack, nonotyou, elonmusk, bolt!, javascript, rbc, blackhole2, quarantine, coronavirus, vaccine, luna, moonlord, vortex, solar, stardust, nebulapillar, Rosedose, demons, defDID, anime 1-4, skyler, makah, clientid, testiping, fix, youtube, Rodopo, twitter, reddit, invitelink, cementgf, lmao,animeteenager, cuteanimeg, gamerboy, logo, sword, priceisright, cementgroundultra, welcome, givediamonds {@user} mwiki, barter, jackpot, testluck, Rock paper scissors, lottery, jackpot, 8ball, assignmemusic, random-number-generator (0-100)');
                break; 
            case 'vote':
                message.channel.send('https://top.gg/bot/737106539797545011');
                break;   
            case 'support': 
                message.channel.send('https://discord.gg/qyQEg4p');
                break; 
            case 'did':
                message.reply('I CAN\'T BELIEVE WHAT YOU DIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIID YOU AUTOMATICLY GET TO SERVE A CEMENT GROUND!!');
                break; 
            case 'test':
                message.channel.send('I\'m online and ready to go');
                break; 
            case 'bakeacake':
                message.channel.send('have a minecraft cake! vannila cake with sugar toppings https://img00.deviantart.net/5a1b/i/2012/188/8/d/minecraft_cake____cake_by_bitebacksugar-d56ahfa.jpg ');
                break;
            case 'thickskull':
                message.channel.send('So another bot on the web Rose Dose has a THICK skull, she has a problem where she gets wet cement and dumps it on her mom and it dries so her mom gets stuck in cement! her mom keeps telling her ROSE WHEN WILL YOU GET IT THROUGH YOUR THICK SKULL, DUMPING CEMENT ON PEOPLE IS NOT OK! NOW GO TO CEMENT! rose gets placed in cement with only her head out and it dried. yikes');
                message.author.send('Rose Dose\'s profile pic https://media.discordapp.net/attachments/737107781060132945/739541452543098970/yikes_burned.png');
                break; 
            case 'reveal': ;
                 message.reply('it is with great honor to award you this because you found the secrete. HAVE A LAMBO! https://s1.cdn.autoevolution.com/images/news/lamborghini-aventador-wrapped-in-gold-chrome-video-72843-7.jpg lamborghinis are EPIC. I\'ll  be over the moon if someone offered me a free lambo! but have a BEAUTIFLE mansion to pair with your lambo http://media-cache-ak0.pinimg.com/originals/92/2a/54/922a542a7e147d9a495ed4256b10878e.jpg also 2 tickets to the price is right! ');              
                break;
            case 'comphack':
                message.channel.send('https://i.ytimg.com/vi/bqFpxpdEOvM/maxresdefault.jpg');
                break; 
            case 'nonotyou':
                message.channel.send('https://tse2.mm.bing.net/th?id=OIP.-jSqpjQcZK-oZtg4mGERnAHaGX&pid=Api&P=0&w=189&h=163');
                break;
            case 'elonmusk':
                message.channel.send('http://media.idownloadblog.com/wp-content/uploads/2014/02/elon-musk-tesla.jpg');
                break;
            case 'bolt!':
                message.channel.send('yes Bolt is listning unlike rose who never lestins to her mom and gets told by her mom that rose has a thick skull');
                break;
            case 'javascript':
                message.channel.send('http://www.tandemseven.com/wp-content/uploads/2017/01/img_Selecting_JavaScript_Framework.png');
                break; 
            case 'rbc':
                message.channel.send('my favorite images or just random ones');
                break;
            case 'blackhole2':
                message.channel.send('http://cdn.sci-news.com/images/enlarge5/image_6812e-Rotating-Black-Hole.jpg');
                break;
            case 'quarantine':
                message.channel.send('what you can do: These aren\'t fun times at all, but you can do some things to stay buisy, you can master an instument, you could catch up on some reading or some actually fun things like doing a compleat run through your favorite game');
                break; 
            case 'coronavirus':
                message.channel.send('COVID 19 or coronavirus is a *beep* they MUST come up with a vaccine soon or I\'ll flip! and yall anti vaccinators BETTER get some or you are basicly saing keep this pandemic going!');
                break;
            case 'vaccine':
                message.channel.send('*you have been vaccinate from coronavirus*');
                break;
            case 'luna':
                message.channel.send('https://tse3.mm.bing.net/th?id=OIP.vpQBLF_3Xk_meQXv9Rv1mgAAAA&pid=Api&P=0&w=300&h=300');
                break;
            case 'moonlord':
                message.channel.send('https://terraria.gamepedia.com/media/terraria.gamepedia.com/7/7f/Moon_Lord.png');
                break; 
            case 'cement':
                message.channel.send('http://ngmblocks.com/wp-content/uploads/2017/08/3-Cement-Bags-2.jpg');
                break; 
            case 'vortex':
                message.channel.send('http://vignette3.wikia.nocookie.net/terraria/images/8/8d/Vortex_Pillar.png/revision/latest?cb=20150705054028');
                break;
            case 'solar':
                message.channel.send('https://gamepedia.cursecdn.com/terraria_gamepedia/5/50/Solar_Pillar.png?version=bfdaf5a185695c5fd70fa94ae9de8602');
                break;
            case 'ping':
                message.reply('ping');
                break; 
            case 'stardust':
                message.channel.send('http://vignette3.wikia.nocookie.net/terraria/images/9/9f/Stardust_Pillar.png/revision/latest?cb=20150705054010');
                break;
            case 'nebulapillar':
                message.channel.send('https://i.ytimg.com/vi/LMVgUk0Wme0/hqdefault.jpg');
                break;
            case 'blackhole3':
                message.channel.send('https://tse2.mm.bing.net/th?id=OIP.89yFOY_DKIzAUdXfFdza_QHaEK&pid=Api&P=0&w=330&h=186');
                break; 
            case 'gold':
                message.channel.send('https://images-ext-2.discordapp.net/external/PV_YdRJjvTbpsLAFjmiouQvaVKudP5fqfFtl2GFpf-c/https/g.foolcdn.com/editorial/images/214749/gold-bars-bullion-stacked-in-pile-getty.jpg?width=1197&height=898');
                break; 
            case 'diamond':
                message.channel.send('https://images-ext-1.discordapp.net/external/nVpmCwJZMyo5QXJCkUlrce23A4aRQrJKL_i_Rgl4dEs/%3Fid%3DOIP.gQuTPkdATZ0Drn5IH-p0OQHaHa%26pid%3DApi%26P%3D0%26w%3D300%26h%3D300/https/tse1.mm.bing.net/th');
                break; 
            case 'sub':
                message.channel.send('subcribe to Boltlightning780!');
                break;
            case 'tesla':
                message.channel.send('https://www.tesla.com/');
                break; 
            case 'minecraft':
                message.channel.send('https://www.minecraft.net/en-us/');
                break;
            case 'terraria':
                message.channel.send('https://www.terraria.org/');
                break;
            case 'Rosedose':
                message.channel.send('Rose has a thick skull!');
                break;
            case 'bolt':
                message.channel.send(`howdy user!, how are you doing on this fine day unless it is raining`);
                break;
            case 'gather':
                message.channel.send(`heads up @everyone looks like someone is having an annoncement! so tune in!`);
                message.author.send('warning! this pings EVERYONE in the ENTIRE server, use only in case of announcements or testing')
               break;
            case 'demons':
                message.channel.send('https://www.youtube.com/watch?v=GFQYaoiIFh8');
                break;
            case 'defDID':
                message.channel.send('the word DIIIIIIIIIIIIIIIIIIIIIIIID is DID with an extended I. the purpose for increasing the number of I\'s to express energy, I CAN\'T BELIEVE WHAT YOU DID or I CAN\'T BELIEVE WHAT YOU DIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIID! to pronounce this wonderful word, just say DI then sustain the I until the final D');
                break;
            case 'anime1': 
                message.channel.send('https://i.ytimg.com/vi/aNy67Ai3wAg/hqdefault.jpg');
                break;
            case 'anime2':
                message.channel.send('https://i.ytimg.com/vi/b4Uizoan0aQ/hqdefault.jpg');
                break; 
            case 'anime3':
                message.channel.send('https://data.whicdn.com/images/295558600/original.jpg?t=1503688074');
                break;
            case 'anime4':
                message.channel.send('http://images6.fanpop.com/image/answers/3579000/3579564_1411127552041.77res_500_281.jpg');
                break; 
            case 'skyler':
                message.channel.send('http://i1.kym-cdn.com/photos/images/facebook/000/994/153/9fe.png');
                break; 
            case 'makah':
                message.channel.send('pronounced mc-ka http://918thefan.com/wp-content/uploads/2010/09/shiki11_5.jpg');
                break;
            case 'javalearn':
                message.channel.send('https://www.youtube.com/watch?time_continue=2&v=o1IaduQICO0&feature=emb_logo');
                break;
            case 'fix':
                message.author.send('contact the developer Bolt2434, and report the issue');
                break;
            case 'testping':
                message.author.send('@everyone');
                break; 
            case 'clientid':
                message.author.send('Client ID sent in this area!')
                message.author.send('737106539797545011');
                console.log('command has been used!')
                message.channel.send('check DMs don\'t misuse the ID!');
                
                break; 
            case 'devsinfo':
                message.author.send('clientid, permsinteger,');
                console.log('command used')
                message.channel.send('used by devs only');
                break;
            case 'permsinteger':
                message.channel.send('8');
                break; 
            case 'Rodopo':
                message.channel.send('Rose Dose Pose');
                break;
            case 'music':
                message.channel.send('https://www.bensound.com/');
                break;
            case 'youtube':
                message.channel.send('https://www.youtube.com/');
                break; 
            case 'twitter':
                message.channel.send('https://twitter.com/home');
                break;
            case 'reddit':
                message.channel.send('https://www.reddit.com/');
                break; 
            case 'invitelink':
                message.channel.send('https://discordapp.com/oauth2/authorize?client_id=737106539797545011&scope=bot&permissions=8');
                break; 
            case 'cementgf':
                message.channel.send('cement is in serious love with makah! I don\'t get it http://918thefan.com/wp-content/uploads/2010/09/shiki11_5.jpg');
                break;
            case 'lmao':
                message.channel.send('cement\'s girlfriend makah is so disgusting and ugly it is FUNNY AS BEEP! that cement likes her also, cement\'t reaction to reciving makah is SO funny!');
                break;
            case 'animeteenager':
               var anim =['http://2.bp.blogspot.com/-2nESXnhSPHU/T5oqdy22qII/AAAAAAAAA5E/MQDjy5RFXds/s1600/anime_boy-1.jpg', 'https://i.ytimg.com/vi/apPwVe50l48/hqdefault.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/6b/39/0b/6b390b09a0155df0cc9b56fff6713583.jpg', 'https://i.pinimg.com/originals/6b/4f/f0/6b4ff0ad43af410957911a7a0302c56d.jpg', 'http://media-cache-ak0.pinimg.com/736x/f2/27/b7/f227b74fe7ca7bd4728ffef12af5fc86.jpg', 'https://tse2.mm.bing.net/th?id=OIP.PDd710_yFyeQmpqXFs2QYQHaHu&pid=Api&P=0&w=300&h=300', 'https://i.pinimg.com/736x/2b/62/e1/2b62e11adeafde615c98002ce2aff651.jpg', 'https://i.pinimg.com/736x/64/1f/04/641f0483fe6e68923e63577e59c0e44f.jpg', 'https://s-media-cache-ak0.pinimg.com/236x/b4/d1/b6/b4d1b6102a5e95724fde0a6134019f7b.jpg', 'https://s-media-cache-ak0.pinimg.com/originals/cb/1b/2c/cb1b2c44013251b65e7d6cc966138e3c.jpg', 'https://i.pinimg.com/736x/c8/e3/c6/c8e3c6dca75cda3f3a61823d1bd95585.jpg', 'https://i.pinimg.com/originals/2b/3c/e6/2b3ce6e8f15fcfcb29ec5f8bc02a5f6a.jpg', 'http://data.whicdn.com/images/118320278/original.jpg'];
               var nim= anim[Math.floor(Math.random()*anim.length)];
               message.channel.send(nim)
                break;
            case 'cuteanimeg':
                var gihi =['https://i.pinimg.com/originals/37/5a/8e/375a8e0decc8e693ed53e6949e36f909.png', 'https://i.pinimg.com/736x/9a/12/52/9a1252cad989790a2c3d3217a638acfe--anime-beautiful-cute.jpg', 'https://i.ytimg.com/vi/UHqgpB-qXLs/hqdefault.jpg', 'https://i.pinimg.com/originals/d4/28/e7/d428e7ab48e754bb616009a98cb18323.jpg', 'http://2.bp.blogspot.com/_QTOPstrBLaY/TLNVcLyhtGI/AAAAAAAAAD4/qk4YyTifvro/s1600/anime_vampire.jpg'];
                var Pose = gihi[Math.floor(Math.random()*gihi.length)];
                message.channel.send(Pose);
             break;
            case 'priceisright':
                message.channel.send('https://i.ytimg.com/vi/1-sYNPLs0OQ/maxresdefault.jpg');
                break; 
            case 'logo':
                message.channel.send('https://images-ext-2.discordapp.net/external/2es-OYHMVTWtCJc_-HsZ8ilUkOaxUog1x8MuXHk1re8/https/s-media-cache-ak0.pinimg.com/originals/cb/1b/2c/cb1b2c44013251b65e7d6cc966138e3c.jpg?width=607&height=898');
                break;
            case 'sword':
                message.channel.send('he reminds me terraria https://images-ext-1.discordapp.net/external/q2tO5ycoxUhpmB9IUqbuZ04YGqeBiiAajgvgnuBl1K8/https/i.stack.imgur.com/wTWJG.jpg?width=654&height=898');
                break;  
            case 'gamerboy':
                 message.channel.send('teen gamer https://images-ext-1.discordapp.net/external/Pn4RsWNb-stEJijxq-AV7xwkp3zOHU0mh5ArYTrg7mo/https/i.ytimg.com/vi/jhLiMV3aOog/maxresdefault.jpg');
                break; 
            case 'flipcoin':
                var coin = ['heads', 'tails'];
                var output = coin[Math.floor(Math.random()*coin.length)];
                message.channel.send(output);
                break;
                if(!args[1]) message.channel.send('Terraria... what');
            const wiki = message.content.wiki
                
                if(args[1]){

                    if(wiki) {
                        message.channel.send('https://terraria.gamepedia.com/Terraria_Wiki');
                    }
                 else 
                    message.channel.send('https://terraria.gamepedia.com/Terraria_Wiki');
                }
                break;
            case 'youagain':
                message.channel.send('This person is nothing but a curse! https://media.discordapp.net/attachments/737107781060132945/738275246032814120/not_anime.png');
                break; 
            case 'warn':
               if(!args[1]) message.channel.send('Who would you like to warn? mention them!');

               if(user) {
                   user.send('Please don\'t do that! you were caught breaking the rules. this is only a warning no serious punishments will occur thanks for understanding').then(() =>{
                    message.channel.send('Warned them!')
                   });
               }
                   

                break; 
                case 'Cement':
                if (!args[1]) message.channel.send('Cement...');

            const ground = message.content.ground

                if(args[1]) {

                    if(ground) {
                        message.channel.send('https://media.discordapp.net/attachments/734586259044958228/739266727971651634/cement_ground.png rose is in cement serving her cement ground in her room');
                    }else {
                        message.channel.send('https://media.discordapp.net/attachments/734586259044958228/739266727971651634/cement_ground.png')
                    }
                }
                
                break;
            case 'cementgroundultra':
                message.channel.send('This is what the cement ground ultra looks like https://www.chinookmed.com/mas_assets/cache/image/1/7/5/a/5978.Jpg')
                message.channel.send('Rose gets inside the bag her mom pours in the cement then it hardens and mom zips up the bag leaving rose inside. The cement ground ultra is portable in case the regular cement ground thing is too big to take on the go');
                break; 
            case 'smoke':
                message.channel.send('🚬 💨');
                break;
            case 'Rose':
                if (!args[1]) message.channel.send('Rose who');

                const Dose = message.content.Dose 

                if(args[1]) {

                    if(Dose) {
                        message.channel.send('Rose Dose has a THICK skull');
                    }else {
                        message.channel.send('Rose has a THICK skull!')
                    }
                }
                break; 
                case 'ban' :
                if(!args[1]) message.channel.send('you need to mention a user in order to nail them with the ban hammer');
                

                if (user) {
                    const member = message.guild.member(user);
                    if(member) {
                        if (member.hasPermission('BAN_MEMBERS')) {
                            console.log('this person can ban');
                        }
                            member.roles.cache.has('745747503919530128');
                            member.ban({resason: 'you got nailed by the ban hammer'}).then(() =>{
                            message.reply(`nailed ${user.tag} with the ban hammer!`)
                            message.author.send('Nailed it! check your bans to revoke ban')
                            
                        }); 
                    }else {
                        message.reply("that user isn\'t in the guild")
                    }
                } else { 
                    message.reply('You need to mention a user in order for me to run this command');
                }
            break; 
            case 'boot' : 
                if(!args[1]) message.channel.send('you need to mention a user in order for me to give them the boot');


                if (user) {
                    const member = message.guild.member(user);
                    if(member) {
                        member.kick('you got the boot!').then(() =>{
                            message.channel.send('booted them!');       
                    }).catch(err => {
                        message.channel.send('cannot boot');
                        console.log(err)
                });
                    }else {
                        message.reply("that user isn\'t in the guild")
                    }
                } else {
                    message.reply('You need to mention a user in order for me to run this command');
                }
            break; 
            // Commands beyond this point is part of indev update (1.0.1 1.01)
            case 'welcome':
                if(!args[1]) message.channel.send('Who would you like to send a welcome message? mention them!')

                if(user) {
                    const member = message.guild.member(user);
                    if(member) {
                         member.send(`Welcome ${user} to this server! have a fun time here! be sure to read ${'#rules'} to know the expecations!`).then(() =>{
                            message.channel.send('sent a warm welcome!'); 
                        }); 
                    }
                }else {
                    message.channel.send('Who would you like to welcome? mention them!')
                }
                break; 
                case 'concrete':
                    message.channel.send('https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/4/4d/Lime_Concrete.png/150px-Lime_Concrete.png?version=ec00c54d8ce6efcbaccbfbf7a738d93d');
                    break;
                case 'favcolor':
                    let favcolor = ['green', 'red', 'blue'] 
                    message.channel.send(favcolor);
                    break; 
                case 'top3games':
                    let top3games = ['Minecraft', 'Terraria','Fortnite (back in 2018!)'];
                    message.channel.send(top3games);
                    break;
                case 'pint':
                    message.channel.send('https://www.pinterest.com/');
                    break;
                case 'some':
                  if (!args[1]) message.channel.send('...cement?');

                      const cement = message.content.cement 
        
                        if(args[1]) {
        
                            if(cement) {
                                message.channel.send('Get your cement ground ultra today! only $19.95!');
                            }else {
                                message.channel.send('Get your cement ground ultra today! only $19.95!')
                            }
                        }
                        break; 
                        //game update (1.02)
                        //minecraft commands
                        case 'givediamonds':
                            if(!args[1]) message.channel.send('Who would you like to give diamonds to?');
             
                            if(user) {
                                user.send('You were gifted 64 diammonds!').then(() =>{
                                 message.channel.send('Gave them diamonds! how nice!')
                                });
                            }
                             break; 
                            case 'mwiki':
                                message.channel.send('https://minecraft.gamepedia.com/Minecraft_Wiki');
                                break;    
                            case 'barter':
                        
                            var options=['You got obsidian!', 'you got crying obsidian!', 'you got a netherite hoe!', 'you got some leather!', 'you got some fire charges', 'you got soul sand!', 'you got an iron nugget!']
                            var response = options[Math.floor(Math.random()*options.length)];
                            message.channel.send(response).then().catch(console.error);
                            break;
                            //Rock paper siccors game code
                            case 'Rock': 
                            var rpc=['Rock, tie', 'paper, I win!', 'scissors, you win!'];
                            var Rpaper = rpc[Math.floor(Math.random()*rpc.length)];
                            message.channel.send(Rpaper);
                            break; 
                            case 'paper':
                            var paper =['Rock, you win!', 'paper, tie', 'scissors I win'];
                            var tree = paper[Math.floor(Math.random()*paper.length)];
                            message.channel.send(tree);
                            break;
                            case 'scissors':
                            var siccors =['Rock I win', 'paper, You win', 'scissors, tie!'];
                            var sizz = siccors[Math.floor(Math.random()*siccors.length)];
                            message.channel.send(sizz);
                            break; 
                            case 'Rockpapersiccors':
                                message.channel.send('Rock beats scissors, Scissors beats paper, paper beats rock');
                                break;
                            case 'testluck':
                                var test =['not your day :( *your car broke down when going to your favorite job getting you fired then send to clean sewers!*', 'you have average luck *you go through your day with nothing too evenful good nor bad*', 'alright you have pretty solid luck *you were picked to play on the price is right*', 'DANG! you NEED to buy a lottery ticket. *the city you live in has way too much cash so they give $1.4B to you and you alone!*'];
                                var luck = test[Math.floor(Math.random()*test.length)];
                                message.channel.send(luck);
                                break;
                            case 'lottery':
                                var lotloot=['You got -3 gold!', 'You got -2 gold!', 'You got -1 gold!', 'You got 0 gold', 'You got 1 gold!', 'You got 2 gold!', 'you got 3 gold!', 'you got one gold nugget (1/10 of a gold)', 'you struck the jackpot! you got 500 gold!']
                                var lhhhhhh = lotloot[Math.floor(Math.random()*lotloot.length)];
                                message.channel.send(lhhhhhh);
                                break; 
                            //finace - money (only for Bolt2434's server)
                            case 'jackpot':
                                message.channel.send('This weeks jackpot is 50,000 boltcoins!');
                                break;
                            case 'boltcoin':
                                message.channel.send('A boltcoin is the Bolt2434\'s server currency (if you\'re not in Bolt2434\'s server ignore this) Boltcoins can buy server advertisements and roles and more')
                                break;
                            case 'tsla':
                                message.channel.send('https://search.yahoo.com/search?fr=mcafee&type=E210US91088G91316&p=tsla');
                                break;
                                //back to games
                            case '8ball':
                                var ball = ['ask me later', 'ask again and try again', 'it\'s a concrete yes' ,'my sources say no', 'without a doubt!', 'all signs point to yes!', 'highly unlikely', 'cannot decide now try again later', 'yes', 'outlook good', 'outlook not so good', 'reply hazy try again'];
                                var dihid = ball[Math.floor(Math.random()*ball.length)];
                                message.channel.send(dihid);
                                break; 
                            case 'assignmemusic':
                                var mus = ['you get to play the sax!', 'you get to play the drums', 'you get to play the clarinet', 'you get to play the guitar', 'you don\'t get to play anything :('];
                                var muhus = mus[Math.floor(Math.random()*mus.length)];
                                message.channel.send(muhus);
                                break; 
                            case 'random-number-generator':
                                var rng =['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27', '28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51', '52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'];
                                var Randomnumb = rng[Math.floor(Math.random()*rng.length)];
                                message.channel.send(Randomnumb);
                                break; 
            } 
    })

bot.login(token); 