let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/svelte_projects/card-workout
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +75 src/routes/cards/+layout.svelte
badd +10 tests/cardFlow.test.ts
badd +18 src/lib/components/cards/PlayingCardWidget.svelte
badd +22 src/lib/components/cards/DeckInfoWidget.svelte
badd +38 src/routes/cards/+page.svelte
badd +13 src/lib/components/cards/StartButton.svelte
badd +9 src/types/playingCard.ts
badd +42 tests/clickingAllCards.test.ts
badd +26 src/lib/components/cards/NopeNotNowButton.svelte
badd +21 src/classes/playingCard.ts
badd +121 src/store.ts
badd +28 src/functions/createDeckOfCards.ts
badd +9 src/functions/createPlayingCard.ts
badd +1 src/lib/components/cards/MiniCardTicks.svelte
badd +1 src/\*\*/tests
badd +20 tests/nopeNotNowButton.ts
badd +12 src/lib/components/cards/PluckedTheSameCard.svelte
badd +22 src/lib/components/cards/CardsInfoWidget.svelte
badd +1 ~/svelte_projects/card-workout
badd +11 src/routes/+layout.svelte
badd +5 src/routes/+page.svelte
badd +45 src/routes/Homepage.svelte
badd +1 src/routes/exercises/+layout.svelte
badd +29 src/routes/about/+layout.svelte
badd +37 src/lib/components/cards/DiscardedCardsWidget.svelte
badd +23 src/lib/components/cards/RankInfoBox.svelte
badd +44 src/lib/components/cards/RepsProgressBox.svelte
badd +12 src/lib/components/cards/RepsInfoWidget.svelte
badd +36 src/lib/components/cards/SuitInfoWidget.svelte
badd +39 src/lib/components/cards/RankInfoWidget.svelte
badd +29 src/lib/components/cards/SuitInfoBox.svelte
argglobal
%argdel
$argadd ~/svelte_projects/card-workout
edit src/lib/components/cards/CardsInfoWidget.svelte
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
3wincmd h
wincmd w
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 32 + 33) / 66)
exe '2resize ' . ((&lines * 31 + 33) / 66)
exe 'vert 2resize ' . ((&columns * 69 + 141) / 282)
exe '3resize ' . ((&lines * 31 + 33) / 66)
exe 'vert 3resize ' . ((&columns * 70 + 141) / 282)
exe '4resize ' . ((&lines * 31 + 33) / 66)
exe 'vert 4resize ' . ((&columns * 70 + 141) / 282)
exe '5resize ' . ((&lines * 31 + 33) / 66)
exe 'vert 5resize ' . ((&columns * 70 + 141) / 282)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 129 - ((24 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
129
normal! 018|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/cards/RepsProgressBox.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/cards/RepsProgressBox.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/cards/RepsProgressBox.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 37 - ((13 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
37
normal! 05|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/cards/DeckInfoWidget.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/cards/DeckInfoWidget.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/cards/DeckInfoWidget.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 38 - ((9 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
38
normal! 0
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/cards/RankInfoWidget.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/cards/RankInfoWidget.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/cards/RankInfoWidget.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 38 - ((19 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
38
normal! 017|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/src/lib/components/cards/SuitInfoWidget.svelte") | buffer ~/svelte_projects/card-workout/src/lib/components/cards/SuitInfoWidget.svelte | else | edit ~/svelte_projects/card-workout/src/lib/components/cards/SuitInfoWidget.svelte | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 34 - ((21 * winheight(0) + 15) / 31)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
34
normal! 020|
lcd ~/svelte_projects/card-workout
wincmd w
exe '1resize ' . ((&lines * 32 + 33) / 66)
exe '2resize ' . ((&lines * 31 + 33) / 66)
exe 'vert 2resize ' . ((&columns * 69 + 141) / 282)
exe '3resize ' . ((&lines * 31 + 33) / 66)
exe 'vert 3resize ' . ((&columns * 70 + 141) / 282)
exe '4resize ' . ((&lines * 31 + 33) / 66)
exe 'vert 4resize ' . ((&columns * 70 + 141) / 282)
exe '5resize ' . ((&lines * 31 + 33) / 66)
exe 'vert 5resize ' . ((&columns * 70 + 141) / 282)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFA
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
