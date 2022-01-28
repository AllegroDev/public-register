module.exports = {
name:"k",
aliased:["girl", "kadın", "woman"],
code:`
$addCmdReactions[$customEmoji[emoji ismi]]

$giveRole[$mentioned[1];kadın rol id]
$takeRole[$mentioned[1];kayıtsız id]
$changeNickname[$mentioned[1]; $noMentionMessage[1] | $noMentionMessage[2]]

$channelSendMessage[chat id;<@$mentioned[1]> Aramıza Katıldı Ona Hoş Geldin Diyelim <#kurallar id> Kanalını Okumuş Sayılacaksın. İyi Eğlenceler.]


$channelSendMessage[kadın kayıt log id;{description:
Kayıt Edilen Kullanıcı: \`$userTag[$mentioned[1]]\` \`($mentioned[1])\`

Kayıt Eden Yetkili: \`$userTag[$authorID]\` \`($authorID)\`

Kullanıcının Yeni İsmi: \` $noMentionMessage[1] | $noMentionMessage[2]\`

Kayıt Türü: \`Kız ♀️\`
Verilen Rol: \`$roleName[kadın rol id]!=true;{author:HATA!:$authorAvatar}{description:
Bu Kişi Zaten Kız Rolüyle Kayıtlı!}{color:RED}{delete:7s}]
$onlyIf[$noMentionMessage[2]!=;{author:HATA!:$authorAvatar}{description:
Kişinin Yaşını Girin!}{color:RED}{delete:7s}]
$onlyIf[$noMentionMessage[1]!=;{author:HATA!:$authorAvatar}{description:
Kişinin Adını Girin!}{color:RED}{delete:7s}]
$onlyIf[$mentioned[1]!=;{author:HATA!:$authorAvatar}{description:
Bir Kişi Etiketleyin!}{color:RED}{delete:7s}]
$onlyForRoles[kayıt edicek id;kayıt edicek id;kayıt edicek id;Üngünüm Yetkin Yetmiyor]
$onlyForServers[server id;]
`
}
