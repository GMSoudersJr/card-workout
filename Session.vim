let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/svelte_projects/card-workout
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +36 src/lib/components/cards/NopeNotNowButton.svelte
badd +15 src/lib/components/cards/DeckInfoWidget.svelte
badd +16 src/lib/components/cards/RankInfoBox.svelte
badd +131 src/lib/components/cards/CardsInfoWidget.svelte
badd +27 src/routes/cards/+layout.svelte
badd +23 src/lib/components/cards/RankInfoWidget.svelte
badd +22 src/lib/components/cards/SuitInfoWidget.svelte
badd +90 src/routes/cards/+page.svelte
badd +124 src/lib/components/cards/PlayingCardWidget.svelte
badd +20 src/lib/components/cards/MiniCardTicks.svelte
badd +13 src/routes/Homepage.svelte
badd +23 src/enums/exerciseNames.ts
badd +1 src/routes/about/+layout.svelte
badd +30 src/routes/exercises/+layout.svelte
badd +5 src/lib/components/SuitYourselfEmojiCombo.svelte
badd +14 src/lib/components/cards/RepsInfoWidget.svelte
badd +15 src/routes/+layout.svelte
badd +36 src/app.css
badd +29 tests/exercisesPage.test.ts
badd +0 tests/workoutFlow.test.ts
argglobal
%argdel
$argadd ./
edit tests/workoutFlow.test.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 141 + 141) / 282)
exe 'vert 2resize ' . ((&columns * 140 + 141) / 282)
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
let s:l = 42 - ((41 * winheight(0) + 32) / 64)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
42
normal! 041|
lcd ~/svelte_projects/card-workout
wincmd w
argglobal
if bufexists("~/svelte_projects/card-workout/tests/exercisesPage.test.ts") | buffer ~/svelte_projects/card-workout/tests/exercisesPage.test.ts | else | edit ~/svelte_projects/card-workout/tests/exercisesPage.test.ts | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 33 - ((32 * winheight(0) + 32) / 64)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
33
normal! 050|
lcd ~/svelte_projects/card-workout
wincmd w
exe 'vert 1resize ' . ((&columns * 141 + 141) / 282)
exe 'vert 2resize ' . ((&columns * 140 + 141) / 282)
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
