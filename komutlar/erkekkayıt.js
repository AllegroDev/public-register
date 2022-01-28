module.exports = {
name:"e",
aliased:["man", "erkek", "boy"],
code:`
$addCmdReactions[$customEmoji[emoji ismi]]

$giveRole[$mentioned[1];erkek rol id]
$takeRole[$mentioned[1];kayıtsız rol id]
$changeNickname[$mentioned[1]; $noMentionMessage[1] | $noMentionMessage[2]]

$channelSendMessage[kanal id (chat olabilir);<@$mentioned[1]> Aramıza Katıldı Ona Hoş Geldin Diyelim <#kanal id> Kanalını Okumuş Sayılacaksın. İyi Eğlenceler.]


$channelSendMessage[erkek kayıt log;{description:
Kayıt Edilen Kullanıcı: \`$userTag[$mentioned[1]]\` \`($mentioned[1])\`

Kayıt Eden Yetkili: \`$userTag[$authorID]\` \`($authorID)\`

Kullanıcının Yeni İsmi: \` $noMentionMessage[1] | $noMentionMessage[2]\`

Kayıt Türü: \`Erkek ♂️\`
Verilen Rol: \`$roleName[erkek rol id]\`


$onlyIf[$hasRole[$mentioned[1];erkek rol id]!=true;{author:HATA!:$authorAvatar}{description:
Bu Kişi Zaten Erkek Rolüyle Kayıtlı!}{color:RED}{delete:7s}]
$onlyIf[$noMentionMessage[2]!=;{author:HATA!:$authorAvatar}{description:
Kişinin Yaşını Girin!}{color:RED}{delete:7s}]
$onlyIf[$noMentionMessage[1]!=;{author:HATA!:$authorAvatar}{description:
Kişinin Adını Girin!}{color:RED}{delete:7s}]
$onlyIf[$mentioned[1]!=;{author:HATA!:$authorAvatar}{description:
Bir Kişi Etiketleyin!}{color:RED}{delete:7s}]
$onlyForRoles[kayıt yapabilecek id;kayıt yapabilecek id;kayıt yapabilecek id;Bu Komuta Erişmeye Yetkin Yok!]
$onlyForServers[server id;]
`
}
