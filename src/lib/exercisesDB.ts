import type { TExercise } from '../types/exercise';
import type { TExerciseName } from '../types/exerciseName';
import {
	abdominEmoji,
	armEmoji,
	bodyEmoji,
	footEmoji,
	handEmoji,
	headNoddingEmoji,
	headShakingEmoji,
	legEmoji,
	superheroEmoji,
	yogaEmoji
} from './emojis';

export const exercises: TExercise<TExerciseName>[] = [
	{
		name: 'ALTERNATE_TOE_TAPS',
		description:
			'Alternate toe taps are a dynamic core and coordination drill where you lie on your back, raise your legs, and tap one heel toward the floor at a time while keeping the other leg lifted. The work centers on your lower abdominals and hip flexors, with your transverse abdominis bracing to keep your spine stable. Press your lower back gently into the floor throughout so it never arches, and move slowly enough that your abs control the descent rather than momentum. Keep your knees softly bent if your hamstrings are tight, and tap only as low as you can manage without your back lifting. Breathe steadily, exhaling as each foot lowers. Aim for controlled, even reps on both sides, treating each tap as a chance to resist your pelvis tilting or rocking from side to side.',
		positions: ['FLOOR'],
		muscles: ['ADDUCTORS', 'HIP_FLEXORS'],
		bodyParts: ['LOWER_LEG', 'UPPER_LEG', 'ABDOMINAL'],
		bodySections: ['LEGS', 'HIPS', 'CORE'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'ANKLE_CIRCLES',
		description:
			'Ankle circles are a simple mobility drill where you lift one foot and rotate it slowly through its full range, drawing a circle with your toes. The movement targets the joints and surrounding muscles of the ankle, including the calves, the tibialis anterior on your shin, and the peroneals on the outside of your lower leg. Sit or stand tall, lift the foot clear of the floor, and trace the largest circle you comfortably can without moving your knee or hip. Go slowly and deliberately, feeling the joint move through dorsiflexion, eversion, plantarflexion, and inversion as you rotate. Complete an equal number of circles in each direction, then switch feet. Use this as a warm-up before training or as a gentle way to keep stiff ankles supple and improve circulation through the joint.',
		positions: ['SEATED', 'SUPINE', 'STANDING'],
		muscles: ['LOWER_LEG'],
		bodyParts: ['ANKLES', 'FEET'],
		bodySections: ['FEET', 'LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/lsWnuKq9CDU?si=D8eLwQpKgoWb8wJg'],
		embeds: ['lsWnuKq9CDU?si=OL-xUBgsbw7IUUGq'],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'ANKLE_ROLLS',
		description:
			'Ankle rolls are a warm-up and mobility movement where you rotate your foot in continuous circles to loosen the ankle joint and the muscles that control it. They work the calves, shin, and the small stabilizing muscles around the ankle, encouraging blood flow and a fuller range of motion. You can perform them seated with the foot lifted or standing with your toes resting on the floor as a pivot point. Roll smoothly and slowly, keeping the rest of your leg relaxed and still so the motion comes purely from the ankle. Make several rotations one way, then reverse direction, and repeat on the other side. Treat ankle rolls as preparation before running, jumping, or lower-body training, or as light maintenance for ankles that feel tight after long periods of sitting or standing.',
		positions: ['SEATED', 'SUPINE', 'STANDING'],
		muscles: ['LOWER_LEG'],
		bodyParts: ['ANKLES', 'FEET'],
		bodySections: ['FEET', 'LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/lsWnuKq9CDU?si=D8eLwQpKgoWb8wJg'],
		embeds: ['lsWnuKq9CDU?si=OL-xUBgsbw7IUUGq'],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'ANKLE_DORSIFLEXIONS',
		description:
			'Ankle dorsiflexions are a mobility and strengthening movement where you pull your foot upward, bringing your toes toward your shin. This action is driven mainly by the tibialis anterior on the front of your shin, and improving it builds the range needed for deep squats, lunges, and confident walking. You can train it actively by lifting your toes while keeping your heel down, or as a mobility drill by driving your knee forward over your toes with your foot flat, often against a wall. Keep your heel anchored so the stretch and contraction stay in the ankle rather than rolling onto the outer foot. Move slowly and hold briefly at your end range. Strong, mobile dorsiflexion takes load off your knees and lower back, since limited ankle motion forces those joints to compensate during everyday movement.',
		positions: ['SEATED', 'STANDING', 'SUPINE'],
		muscles: ['SHINS'],
		bodyParts: ['ANKLES', 'FEET'],
		bodySections: ['FEET'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/4wVzDjOCPzw?si=1ii_-E3zFZUw3czr'],
		embeds: ['4wVzDjOCPzw?si=VRzsYfLrnjIguu-9'],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'ANKLE_EVERSIONS',
		description:
			'Ankle eversions are a strengthening movement where you turn the sole of your foot outward, away from your body\'s midline. The motion is driven by the peroneal muscles, peroneus longus and peroneus brevis, which run down the outside of your lower leg and act as a key defense against rolling your ankle inward. Sit or lie with your leg extended and rotate the foot outward in a controlled arc, keeping your lower leg still so the work isolates the ankle. For added resistance, loop a band around your forefoot and anchor it toward your other foot. Move slowly through the full range and resist on the way back rather than letting the foot snap inward. Strengthening these muscles is especially valuable if you have a history of ankle sprains, since strong everters help stabilize the joint on uneven ground.',
		positions: ['SEATED', 'STANDING', 'SUPINE'],
		muscles: ['LOWER_LEG'],
		bodyParts: ['ANKLES', 'FEET', 'LOWER_LEG'],
		bodySections: ['FEET', 'LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/Xi5Ka85TCbI?si=phYMHdl_n-8BDvKg'],
		embeds: ['Xi5Ka85TCbI?si=hQPQDEil1bH1sNDm'],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'ANKLE_INVERSIONS',
		description:
			"Ankle inversions are a strengthening movement where you turn the sole of your foot inward, toward your body's midline. The motion is driven largely by the tibialis posterior and tibialis anterior, muscles that support the arch and the inner ankle. Sit or lie with your leg extended and rotate the foot inward in a slow, controlled arc while keeping your shin still, so the effort stays focused on the ankle rather than the hip. A resistance band looped around your forefoot and anchored to the outside adds load. Move through the full available range and control the return rather than letting the foot drop back quickly. Training inversion alongside eversion builds balanced strength around the ankle, supports the arch of your foot, and contributes to overall joint stability for walking, running, and changes of direction.",
		positions: ['SEATED', 'STANDING', 'SUPINE'],
		muscles: ['LOWER_LEG'],
		bodyParts: ['ANKLES', 'FEET', 'LOWER_LEG'],
		bodySections: ['FEET', 'LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/Xi5Ka85TCbI?si=phYMHdl_n-8BDvKg'],
		embeds: ['Xi5Ka85TCbI?si=hQPQDEil1bH1sNDm'],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'ARCH_LIFTS',
		description:
			'Arch lifts are a variation of the short foot exercise, developed by Czech neurologist Dr. Vladimir Janda, where you raise the arch of your foot while keeping your toes and heel planted. The target is the intrinsic foot muscles, especially the abductor hallucis that supports the medial longitudinal arch, which helps with balance, posture, and shock absorption. Sit or stand barefoot, then shorten your foot by drawing the ball gently toward your heel, doming the arch upward without curling or gripping your toes. Hold briefly, keeping your toes relaxed and flat, then release. It can feel awkward or even cramp at first, which is normal as these muscles wake up. Activation is greater when you progress to standing on one leg. Strong arches support your feet from the ground up and can help with flat feet and plantar fasciitis.',
		positions: ['SEATED', 'STANDING', 'SUPINE'],
		muscles: ['LOWER_LEG'],
		bodyParts: ['FEET', 'LOWER_LEG'],
		bodySections: ['FEET', 'LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: ['https://youtu.be/B4Ti5rLEwE4?si=HZc5nk7TwEF_JAkp'],
		embeds: ['B4Ti5rLEwE4?si=l-wTwMwIsqXzLIi-'],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'ARM_EXTENSIONS',
		positions: ['SEATED', 'STANDING', 'SUPINE'],
		muscles: ['TRICEPS'],
		bodyParts: ['ARMS'],
		bodySections: ['ARMS'],
		variations: ['LOW_IMPACT', 'STANDING', 'SEATED', 'ALTERNATING', 'SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
		emojis: [armEmoji]
	},
	{
		name: 'ATG_SPLIT_SQUATS',
		description:
			'ATG split squats are a deep, single-leg squat variation where you drop your hips down and forward until your front knee travels well past your toes and your hamstring meets your calf. Popularized by Ben Patrick, the Knees Over Toes Guy and founder of the Athletic Truth Group, they build the quadriceps, glutes, and adductors while developing mobility in the hips, knees, and ankles. Take a long split stance, keep your torso tall, and lower slowly while driving your front heel into the floor and keeping it flat throughout. Pause at the bottom, then push back up under control rather than bouncing. Your back leg stays long to stretch the hip flexor. Start with bodyweight, elevate your front foot if your ankle mobility is limited, and add load only once your form is solid. Rest fully between legs.',
		positions: ['STANDING'],
		muscles: ['QUADS', 'HAMSTRINGS', 'ADDUCTORS', 'ABDUCTORS', 'CALVES'],
		bodyParts: ['LOWER_LEG', 'UPPER_LEG', 'ANKLES'],
		bodySections: ['LEGS'],
		variations: ['SLOW', 'LOW_IMPACT', 'ON_STAIRS'],
		demos: ['https://barbend.com/atg-split-squat/'],
		embeds: ['Vb4Pn-zsFGc?si=HA6D-jx7NtRN-WAa'],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'ATG_SQUATS',
		description:
			'ATG squats are a deep, ass-to-grass bodyweight squat where you descend until your hamstrings cover your calves, training your legs through their fullest range. They emphasize the quadriceps, particularly the vastus medialis around the knee, along with the glutes, while building mobility and resilience in the knees and ankles. Stand with feet about shoulder-width, then sit straight down, letting your knees travel forward over your toes while keeping your heels down and your chest upright. Elevating your heels on a slant board or wedge makes the bottom position more accessible and shifts focus onto the quads. Control the descent and drive up through your whole foot. ATG squats build knee resilience and full-range leg strength that carry over to running, jumping, and everyday movement.',
		positions: ['STANDING'],
		muscles: ['QUADS', 'HAMSTRINGS', 'ADDUCTORS', 'ABDUCTORS', 'CALVES'],
		bodyParts: ['LOWER_LEG', 'UPPER_LEG'],
		bodySections: ['LEGS'],
		variations: ['SLOW'],
		demos: ['https://fitnessvolt.com/atg-squat/'],
		embeds: ['E10hHrHV4MQ?si=1NJrtBSsnmcRmpKZ'],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'BACK_EXTENSIONS',
		description:
			'Back extensions are a posterior-chain exercise where you lie face down and lift your chest and upper body off the floor to strengthen the muscles that extend your spine. The primary target is the erector spinae running along your lower back, with support from the glutes and hamstrings. Lie prone with your hands by your temples or extended ahead, then raise your torso by contracting your lower back rather than yanking with your neck. Lift only to a neutral or slightly extended position, avoiding overarching, and lower slowly with control. Keep your gaze toward the floor to keep your neck in line with your spine. Squeeze your glutes to share the load and protect your lumbar spine. Strong spinal extensors support good posture, make lifting and bending safer, and help counter the effects of prolonged sitting.',
		positions: ['PRONE'],
		muscles: ['ERECTOR_SPINAE', 'GLUTES'],
		bodyParts: ['LOWER_BACK', 'UPPER_BACK'],
		bodySections: ['BACK'],
		variations: ['SLOW'],
		demos: ['https://www.youtube.com/watch?v=Bw9YuQTTc58'],
		embeds: ['Bw9YuQTTc58?si=4QW9AgyrAKwdENZ-'],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY', 'YOGA'],
		emojis: [yogaEmoji]
	},
	{
		name: 'BEAR_CRAWLS',
		description:
			'Bear crawls are a full-body locomotion drill where you move on your hands and feet with your knees hovering just off the floor, like a moving plank. They train your core, shoulders, and quads hardest, while your chest, triceps, glutes, and calves all assist in supporting and driving your body. Start on all fours with hands under your shoulders and knees under your hips, lift your knees an inch or two, and crawl by moving opposite hand and foot together. Keep your back flat, your hips level with your shoulders, and your core braced so your torso does not twist or sag. Take small, controlled steps and gaze at the floor to protect your neck. Move slowly to maximize stability and time under tension. Bear crawls build coordination, shoulder stability, and core endurance that carry over to almost everything else you train.',
		positions: ['PRONE', 'FLOOR'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['INCLINED', 'DECLINED', 'ON_STAIRS', 'SLOW', 'LOW_IMPACT'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'PRIMAL_MOVEMENTS', 'MOBILITY'],
		emojis: [bodyEmoji]
	},
	{
		name: 'BIRD_DOG_POSES',
		description:
			'Bird dog poses are a core-stability exercise, one of Dr. Stuart McGill\'s Big 3 for spine health, performed on all fours where you extend one arm and the opposite leg at the same time while keeping your torso perfectly still. The movement trains anti-rotation strength through your deep core, including the transverse abdominis and obliques, along with the erector spinae, multifidus, and glutes. Start in a tabletop position with hands under shoulders and knees under hips, brace your core, and reach one arm forward while extending the opposite leg back to hip height. Keep your hips and shoulders square to the floor, your spine neutral, and your neck long. Move slowly, pause at full extension, and avoid arching or sagging as you switch sides.',
		positions: ['PRONE', 'FLOOR'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['ON_KNEES', 'BENT_KNEES'],
		demos: [''],
		embeds: [''],
		categories: ['STABILITY', 'YOGA'],
		emojis: [yogaEmoji]
	},
	{
		name: 'BRIDGES',
		description:
			'Bridges are a glute and posterior-chain exercise where you lie on your back, bend your knees, and lift your hips toward the ceiling. The main movers are the gluteus maximus and hamstrings, with your core and lower back stabilizing the position. Lie with your feet flat and hip-width apart, arms by your sides, then drive through your heels to raise your hips until your body forms a straight line from shoulders to knees. Squeeze your glutes hard at the top and avoid overarching your lower back by keeping your core engaged. Lower slowly rather than dropping down. Keep your knees tracking in line with your feet throughout. Bridges strengthen the hips, support better posture, and counter the weakness that comes from prolonged sitting, and they make a useful warm-up to activate glutes before heavier lower-body work.',
		positions: ['SUPINE', 'FLOOR'],
		muscles: ['CORE', 'ERECTOR_SPINAE', 'GLUTES', 'HAMSTRINGS'],
		bodyParts: ['ABDOMINAL', 'LOWER_BACK', 'UPPER_LEG'],
		bodySections: ['BACK', 'CORE', 'LEGS'],
		variations: ['SLOW', 'LOW_IMPACT', 'ON_THE_WALL'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY'],
		emojis: [bodyEmoji]
	},
	{
		name: 'BURPEES',
		description:
			'Burpees are a full-body conditioning exercise that combines a squat, a plank, a push-up, and a jump into one continuous, explosive movement. They tax nearly everything at once, working your chest, shoulders, triceps, core, quads, and glutes while spiking your heart rate for serious cardiovascular demand. From standing, drop into a squat and place your hands down, kick your feet back into a plank, lower your chest, then reverse the steps and finish with a jump and a reach overhead. Keep your core tight in the plank so your hips do not sag, and land softly from the jump with bent knees. Move at a pace you can sustain with good form rather than rushing into sloppy reps. Scale by stepping back instead of jumping. Burpees build endurance, power, and total-body coordination with no equipment needed.',
		positions: ['STANDING', 'PRONE'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY'],
		emojis: [bodyEmoji]
	},
	{
		name: 'BUTT_KICKS',
		description:
			'Butt kicks are a dynamic cardio and warm-up drill where you jog in place while kicking your heels up toward your glutes. They primarily work the hamstrings through repeated knee flexion, while the quads, calves, and hip flexors stay active and your heart rate climbs. Stand tall, then rapidly bring one heel up toward your seat and switch legs in a running rhythm, letting your arms swing naturally as if jogging. Stay light on the balls of your feet, keep your torso upright, and avoid leaning forward or arching your back. Aim for a quick, springy cadence rather than big, slow kicks. Butt kicks loosen and activate the hamstrings, raise your core temperature before a workout, and reinforce a running form that brings the heels under the hips. Use them in a dynamic warm-up or as a cardio interval.',
		positions: ['STANDING'],
		muscles: ['HAMSTRINGS', 'GLUTES', 'CALVES'],
		bodyParts: ['LOWER_LEG', 'UPPER_LEG', 'HIPS'],
		bodySections: ['LEGS'],
		variations: ['LOW_IMPACT', 'SINGLE_LEGGED'],
		demos: [''],
		embeds: [''],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'CALF_RAISES',
		description:
			'Calf raises are a lower-leg exercise where you rise onto the balls of your feet to strengthen the calves through ankle plantarflexion. Performed with straight knees, they emphasize the gastrocnemius, the large, visible diamond-shaped calf muscle, while the deeper soleus assists along with stabilizers like the tibialis posterior. Stand tall, press up onto the balls of both feet as high as you can, pause at the top, then lower slowly. For a fuller range, perform them on the edge of a step so your heels can drop below the platform for a deeper stretch. Control the descent rather than bouncing, and keep your knees mostly straight throughout. Progress by adding weight or working one leg at a time. Strong calves support running, jumping, and balance, and help absorb impact every time your foot meets the ground.',
		positions: ['STANDING', 'SEATED'],
		muscles: ['CALVES'],
		bodyParts: ['LOWER_LEG'],
		bodySections: ['LEGS'],
		variations: ['SEATED', 'ON_STAIRS', 'ELEVATED'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'CAT_COW_POSES',
		description:
			'Cat cow poses are a gentle, flowing spinal mobility exercise where you alternate between rounding and arching your back on all fours, moving with your breath. The movement mobilizes the entire spine and stretches and activates the erector spinae, abdominals, neck, and shoulders while encouraging healthy circulation of joint fluid. Begin in a tabletop position with hands under shoulders and knees under hips. As you inhale, drop your belly, lift your chest and tailbone into cow; as you exhale, round your spine toward the ceiling and tuck your chin into cat. Move slowly and let each transition follow your breath, working through your full comfortable range. Keep the motion smooth rather than forced. Cat cow is ideal as a warm-up before training or as a standalone way to relieve stiffness, improve posture, and reconnect breath with movement.',
		positions: ['STANDING', 'SEATED', 'FLOOR', 'PRONE'],
		muscles: ['CORE', 'ERECTOR_SPINAE'],
		bodyParts: ['LOWER_BACK', 'UPPER_BACK'],
		bodySections: ['BACK', 'CORE'],
		variations: ['STANDING', 'SEATED', 'ON_ALL_FOURS', 'ON_THE_WALL'],
		demos: ['https://www.youtube.com/watch?v=ESJ6Ghvgr6k'],
		embeds: ['ESJ6Ghvgr6k?si=koga2LxoIvTR8P46'],
		categories: ['YOGA', 'MOBILITY'],
		emojis: [yogaEmoji]
	},
	{
		name: 'CRUNCHES',
		description:
			'Crunches are a classic abdominal exercise where you lie on your back and curl your shoulders off the floor to contract your core. The primary target is the rectus abdominis, the muscle that forms the visible six-pack, with the obliques assisting. Lie with your knees bent and feet flat, hands lightly behind your head or across your chest, then lift your shoulder blades off the floor by drawing your ribs toward your pelvis. Keep the movement small and controlled, exhaling as you crunch up and lowering slowly. Avoid pulling on your neck with your hands or yanking your chin to your chest; let your abs do the work and keep a gap under your chin. Lower back stays on the floor throughout. Crunches build abdominal strength and endurance, and they work best as part of a broader core routine.',
		positions: ['FLOOR', 'SUPINE'],
		muscles: ['CORE', 'RECTUS_ABDOMINUS'],
		bodyParts: ['ABDOMINAL', 'CORE', 'TORSO'],
		bodySections: ['CORE'],
		variations: ['INCLINED', 'REVERSE'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
		emojis: [abdominEmoji]
	},
	{
		name: 'DIPS',
		description:
			'Dips are an upper-body pushing exercise where you support your body on parallel bars or a bench and lower yourself by bending your elbows, then press back up. They build the triceps, chest, and front of the shoulders, with your core working to keep your torso stable. Grip the bars with arms straight, lower under control until your elbows reach roughly ninety degrees, then push back to the top. Leaning your torso forward shifts more emphasis onto the chest, while staying upright targets the triceps. Keep your shoulders down and away from your ears, and avoid sinking so deep that you strain the shoulder joint. Move smoothly rather than bouncing at the bottom. Use a bench or assistance bands to scale the difficulty. Dips are one of the most effective bodyweight builders for pressing strength and triceps development.',
		positions: ['STANDING'],
		muscles: ['TRICEPS', 'DELTS'],
		bodyParts: ['ARMS', 'SHOULDERS'],
		bodySections: ['ARMS', 'SHOULDERS'],
		variations: ['SLOW', 'BENT_KNEES', 'INVERTED'],
		demos: ['https://www.wikihow.com/Do-Dips'],
		embeds: ['l41SoWZiowI?si=nR7Crq7K7A4jyzJL'],
		categories: ['CALISTHENICS'],
		emojis: [armEmoji]
	},
	{
		name: 'DOWNWARD_DOG_POSES',
		description:
			'Downward dog poses are a foundational yoga position where you press your hips up and back into an inverted V shape, with hands and feet on the floor. The pose stretches the hamstrings, calves, and spine while building strength in the shoulders, arms, and wrists, and it gently engages the core. From hands and knees, tuck your toes, lift your hips toward the ceiling, and straighten your legs as much as is comfortable while pressing your heels toward the floor. Spread your fingers wide, press the floor away to keep your shoulders stable, and lengthen your spine rather than rounding it. Bend your knees if your hamstrings are tight. Let your head hang relaxed between your arms. Downward dog mobilizes the whole back of the body, relieves tension from sitting, and serves as a resting and transitional pose in many flows.',
		positions: ['PRONE', 'FLOOR'],
		muscles: ['CALVES', 'SHOULDER_GIRDLE', 'CORE'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['ON_KNEES', 'ON_ALL_FOURS'],
		demos: ['https://www.youtube.com/watch?v=ayQoxw8sRTk'],
		embeds: ['ayQoxw8sRTk?si=worNs5_dza5kTKda'],
		categories: ['YOGA'],
		emojis: [yogaEmoji]
	},
	{
		name: 'FLUTTER_KICKS',
		description:
			'Flutter kicks are a core endurance exercise where you lie on your back and make small, rapid, alternating up-and-down kicks with straight legs. They primarily target the lower portion of the rectus abdominis, with the hip flexors and quadriceps working hard and the deep core stabilizing throughout. Lie flat, place your hands under your glutes for support, and press your lower back firmly into the floor as you lift your legs and flutter them in a controlled, scissoring rhythm. Keep your heels just a few inches off the ground, since lower legs make your abs work harder. Do not let your back arch; if it lifts, raise your legs higher or stop. Keep your head and neck relaxed on the mat. Flutter kicks build lower-ab endurance and anti-extension stability useful for running, swimming, and heavy lifts.',
		positions: ['SUPINE'],
		muscles: ['CORE'],
		bodyParts: ['CORE'],
		bodySections: ['CORE'],
		variations: ['SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'STABILITY'],
		emojis: [legEmoji]
	},
	{
		name: 'FORWARD_ARM_CIRCLES',
		description:
			'Forward arm circles are a shoulder mobility and warm-up movement where you extend your arms out to the sides and rotate them forward in controlled circles. They engage the deltoids, the muscles of the upper back, and the rotator cuff while warming the shoulder joint and improving circulation. Stand tall with your arms straight out at shoulder height, then draw small circles that gradually grow larger, keeping the motion smooth and your core engaged. Keep your shoulders down away from your ears and avoid shrugging or arching your back. Maintain a steady, controlled pace rather than swinging wildly. After a set of forward circles, you can reverse the direction to balance the movement. Forward arm circles prepare the shoulders for pressing, pulling, or overhead work, and they make a quick, equipment-free way to loosen tight shoulders during the day.',
		positions: ['STANDING', 'KNEELING', 'SEATED'],
		muscles: ['SHOULDER_GIRDLE'],
		bodyParts: ['SHOULDERS'],
		bodySections: ['SHOULDERS'],
		variations: ['REVERSE', 'SLOW', 'CROSSED_ARMS', 'SEATED', 'ON_KNEES'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY'],
		emojis: [armEmoji]
	},
	{
		name: 'HIGH_KNEES',
		description:
			'High knees are a dynamic cardio and warm-up drill where you run in place while driving your knees up toward hip height as fast as you can. They elevate your heart rate while working the hip flexors, quads, calves, and core, and they reinforce powerful running mechanics. Stand tall and pump your knees upward one at a time in a quick rhythm, landing softly on the balls of your feet and swinging your arms as you would when sprinting. Keep your torso upright, brace your core, and avoid leaning back as the knees rise. Aim for height and a fast cadence rather than just speed across the floor. High knees build lower-body power and coordination, raise your core temperature before training, and double as an effective conditioning interval when performed in timed bursts.',
		positions: ['STANDING'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['LOW_IMPACT', 'SLOW', 'SINGLE_LEGGED'],
		demos: [''],
		embeds: [''],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [bodyEmoji]
	},
	{
		name: 'JUMPING_JACKS',
		description:
			'Jumping jacks are a classic full-body cardio exercise where you jump your feet out wide while raising your arms overhead, then return to standing. They raise your heart rate quickly while working the shoulders, hips, inner and outer thighs, and calves, making them a staple warm-up and conditioning move. Start with feet together and arms at your sides, then simultaneously jump your legs apart and sweep your arms up overhead, before reversing the motion in a steady rhythm. Land softly with a slight bend in your knees to absorb impact, and keep your core engaged so your movements stay controlled. Maintain an even, sustainable pace. Jumping jacks need no equipment and very little space, making them an easy way to warm the whole body, build cardiovascular endurance, and improve coordination between your upper and lower body.',
		positions: ['STANDING'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['LOW_IMPACT', 'SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY'],
		emojis: [bodyEmoji]
	},
	{
		name: 'KNEE_RAISES',
		description:
			'Knee raises are a core exercise where you lift your knees toward your chest, either hanging from a bar or supported on your forearms, to work the abdominals and hip flexors. The lower rectus abdominis does much of the work, with the hip flexors driving the knee lift and the obliques and deep core stabilizing. Start with your body upright and legs hanging, then raise your knees up by curling your pelvis slightly rather than just swinging your legs. Keep the movement controlled and avoid using momentum to swing your body. Lower your legs slowly under tension. If hanging is too demanding, use a captain\'s chair or perform them lying on your back. Keep your shoulders engaged and your core braced throughout. Knee raises build lower-ab strength and control that support better posture and carry over to more advanced core movements.',
		positions: ['STANDING', 'SEATED', 'SIDE', 'FLOOR'],
		muscles: ['HIP_FLEXORS', 'CORE', 'ABDUCTORS', 'ADDUCTORS'],
		bodyParts: ['UPPER_LEG', 'CORE'],
		bodySections: ['CORE', 'LEGS'],
		variations: ['ON_ALL_FOURS', 'SLOW', 'SINGLE_LEGGED', 'PIKE'],
		demos: ['https://youtu.be/aK8Rm_tv3WM?si=upFmKOPpjfafmlHE'],
		embeds: ['aK8Rm_tv3WM?si=iq1B2l_SCjPIgcFY'],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [legEmoji]
	},
	{
		name: 'LATERAL_LEG_RAISES',
		description:
			'Lateral leg raises are a hip-strengthening exercise where you lift one leg out to the side to target the muscles of the outer hip. The primary movers are the gluteus medius and gluteus minimus, which abduct the hip and play a key role in stabilizing your pelvis when you walk, run, or stand on one leg. Lie on your side or stand tall, then raise the top leg out to the side in a controlled arc, keeping it straight and your toes facing forward. Lift only as high as you can without tilting your hips or leaning your torso, then lower slowly. Keep your core engaged and avoid letting momentum take over. Strong hip abductors improve balance and gait, protect the knees by keeping them aligned, and help correct the weakness that contributes to many lower-body aches.',
		positions: ['STANDING', 'SIDE'],
		muscles: ['ABDUCTORS', 'CORE'],
		bodyParts: ['CORE', 'UPPER_LEG'],
		bodySections: ['CORE', 'LEGS'],
		variations: ['SLOW', 'ALTERNATING', 'BENT_KNEES', 'SINGLE_LEGGED'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'STABILITY'],
		emojis: [legEmoji]
	},
	{
		name: 'LEG_RAISES',
		description:
			'Leg raises are a core exercise where you lie on your back and lift your straight legs toward the ceiling, then lower them under control. They strongly target the lower rectus abdominis and hip flexors, with the deep core working to keep your spine stable throughout. Lie flat with your legs extended and hands under your glutes or by your sides, then raise your legs until they point upward, keeping them as straight as your flexibility allows. Lower them slowly without letting your lower back arch off the floor; if it lifts, reduce your range or bend your knees slightly. Press your lower back down throughout and keep the motion smooth rather than jerky. Leg raises build lower-ab strength and control, and the slow lowering phase is where much of the work happens, so resist the urge to drop your legs quickly.',
		positions: ['SUPINE', 'FLOOR'],
		muscles: ['CORE'],
		bodyParts: ['CORE', 'UPPER_LEG'],
		bodySections: ['CORE'],
		variations: ['BENT_KNEES', 'SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
		emojis: [legEmoji]
	},
	{
		name: 'LUNGES',
		description:
			'Lunges are a single-leg exercise where you step forward or back and lower your hips until both knees are bent around ninety degrees. They build the quadriceps, glutes, and hamstrings while challenging your balance and correcting strength differences between your legs. Step into a stance, then lower straight down so your front thigh approaches parallel and your back knee hovers just above the floor, keeping your front knee tracking over your foot. Drive back up through your front heel and keep your torso upright with your core braced throughout. Avoid letting your front knee cave inward or your back slump. You can perform them stepping forward, backward, or walking, and add dumbbells as you progress. Lunges develop functional lower-body strength and stability that carry over directly to walking, climbing stairs, running, and most athletic movement.',
		positions: ['STANDING'],
		muscles: ['ABDUCTORS', 'ADDUCTORS', 'QUADS', 'HAMSTRINGS', 'CALVES', 'CORE'],
		bodyParts: ['ANKLES', 'FEET', 'LOWER_LEG', 'UPPER_LEG', 'HIPS'],
		bodySections: ['LEGS', 'HIPS', 'FEET'],
		variations: ['REVERSE', 'SLOW'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'MOUNTAIN_CLIMBERS',
		description:
			'Mountain climbers are a dynamic full-body exercise where you hold a plank and rapidly drive your knees toward your chest one at a time. They combine core stability with cardio, working the abdominals, hip flexors, shoulders, and quads while keeping your heart rate high. Start in a high plank with hands under your shoulders and your body in a straight line, then pull one knee toward your chest and quickly switch legs in a running motion. Keep your hips low and level, your core braced, and your shoulders stacked over your wrists so your upper body stays stable. Avoid letting your hips pike up or sag down as you speed up. Control the pace to maintain form. Mountain climbers build core endurance, shoulder stability, and conditioning all at once, and they need no equipment and very little space.',
		positions: ['PRONE'],
		muscles: ['WHOLE_BODY'],
		bodyParts: ['WHOLE_BODY'],
		bodySections: ['WHOLE_BODY'],
		variations: ['LOW_IMPACT', 'SLOW', 'ON_STAIRS', 'ON_THE_WALL', 'ALTERNATING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
		emojis: [bodyEmoji]
	},
	{
		name: 'NECK_CIRCLES',
		description:
			'Neck circles are a gentle mobility movement where you slowly rotate your head in a circular path to loosen the muscles and joints of the neck. They mobilize the cervical spine and ease tension in the muscles along the neck and upper shoulders, areas that tighten from desk work and screen time. Sit or stand tall with relaxed shoulders, then lower your chin toward your chest and slowly roll your head in a controlled circle, moving only as far as is comfortable. Keep the motion slow and smooth, never forcing the range, and avoid cranking your head back hard. Complete a few circles in one direction, then reverse. Stop if you feel any pinching or dizziness. Neck circles relieve stiffness, improve range of motion, and make a useful break during long periods of sitting or before upper-body training.',
		positions: ['STANDING', 'SEATED', 'KNEELING'],
		muscles: ['NECK'],
		bodyParts: ['NECK'],
		bodySections: ['NECK'],
		variations: ['SLOW', 'LOW_IMPACT', 'ALTERNATING', 'STANDING', 'SEATED', 'ON_ALL_FOURS'],
		demos: ['https://youtu.be/gBwGyIp5vdM?si=kvG2iRsg15w6bQT5'],
		embeds: ['gBwGyIp5vdM?si=oZE7XWPmWC7xFd7y'],
		categories: ['YOGA', 'MOBILITY'],
		emojis: [headNoddingEmoji, headShakingEmoji]
	},
	{
		name: 'NECK_ROLLS',
		description:
			'Neck rolls are a slow, controlled mobility exercise where you guide your head through a gentle arc to release tension and improve range of motion in the neck. They stretch the muscles of the neck and upper shoulders while mobilizing the cervical spine. Sit or stand tall, drop your chin toward your chest, then roll your head gently toward one shoulder and back, working through a comfortable range without tipping your head sharply backward. Move slowly and breathe, letting tight spots gradually ease rather than forcing them. Keep your shoulders relaxed and down throughout. Perform a few rolls in each direction and stop immediately if you feel any sharp pain or dizziness. Neck rolls are an easy way to relieve the stiffness that builds from sitting, looking at screens, or sleeping awkwardly, and they prepare the neck gently before upper-body work.',
		positions: ['STANDING', 'SEATED', 'KNEELING'],
		muscles: ['NECK'],
		bodyParts: ['NECK'],
		bodySections: ['NECK'],
		variations: ['SLOW', 'LOW_IMPACT', 'ALTERNATING', 'STANDING', 'SEATED', 'ON_ALL_FOURS'],
		demos: ['https://youtu.be/gBwGyIp5vdM?si=kvG2iRsg15w6bQT5'],
		embeds: ['gBwGyIp5vdM?si=oZE7XWPmWC7xFd7y'],
		categories: ['YOGA', 'MOBILITY'],
		emojis: [headNoddingEmoji, headShakingEmoji]
	},
	{
		name: 'PLANKS',
		description:
			'Planks are an isometric core exercise where you hold your body in a straight line, supported on your forearms or hands and your toes. They build deep core stability, working the transverse abdominis, rectus abdominis, and obliques, along with the shoulders, glutes, and back as stabilizers. Set your elbows under your shoulders, extend your legs behind you, and hold your body rigid from head to heels without letting your hips sag or pike. Brace your core as if bracing for a light punch, squeeze your glutes, and keep your neck neutral by gazing at the floor. Breathe steadily rather than holding your breath. Hold for time, stopping when your form starts to break rather than pushing into a sagging position. Planks teach your core to resist movement and stabilize the spine, a foundation that supports nearly every lift and athletic action.',
		positions: ['PRONE', 'FLOOR'],
		muscles: ['CORE'],
		bodyParts: ['CORE'],
		bodySections: ['CORE'],
		variations: ['ON_KNEES', 'LOW_IMPACT'],
		demos: ['https://youtu.be/DoYPuzccR-M?si=EkZyty5HBKdcuHzw'],
		embeds: ['DoYPuzccR-M?si=Pp9nevDBtLaoLITr'],
		categories: ['CALISTHENICS'],
		emojis: [abdominEmoji]
	},
	{
		name: 'PULL_UPS',
		description:
			'Pull-ups are an upper-body pulling exercise where you hang from a bar and pull your chin above it using your back and arm strength. They primarily build the latissimus dorsi, the large muscles of your back, along with the biceps, rear shoulders, and the muscles between your shoulder blades, while your core stays engaged. Grip the bar slightly wider than shoulder-width with palms facing away, hang with arms extended, then pull your elbows down and back to bring your chest toward the bar. Lead with your chest, squeeze your shoulder blades together, and avoid swinging or kipping if you are training strict strength. Lower yourself under control to a full hang each rep. Use a band or assisted machine if you are building up to your first rep. Pull-ups are one of the best measures and builders of upper-body pulling strength.',
		positions: ['STANDING'],
		muscles: ['BICEPS', 'SHOULDER_GIRDLE', 'FOREARM', 'LATS', 'CORE'],
		bodyParts: ['ARMS', 'UPPER_BACK', 'CORE'],
		bodySections: ['ARMS', 'BACK', 'CORE'],
		variations: ['WIDE_GRIP', 'CLOSE_GRIP', 'LOW_IMPACT', 'SLOW', 'ALTERNATING'],
		demos: ['https://youtu.be/rw58y0KoidM?si=G9GbWQ7oITUO_SDP'],
		embeds: ['rw58y0KoidM?si=f0x2ovtCNGqDPuTg'],
		categories: ['CALISTHENICS'],
		emojis: [handEmoji, armEmoji]
	},
	{
		name: 'PUSH_UPS',
		description:
			'Push-ups are a foundational upper-body exercise where you lower and raise your body in a plank position using your arms. They build the chest, shoulders, and triceps while your core, glutes, and back work to keep your body rigid. Place your hands slightly wider than your shoulders, extend your legs behind you, and lower your chest toward the floor by bending your elbows at roughly a forty-five-degree angle to your body. Press back up while keeping your body in a straight line from head to heels, never letting your hips sag or rise. Keep your core braced and your neck neutral throughout. Drop to your knees or elevate your hands to scale the difficulty. Push-ups are among the most efficient bodyweight exercises for pressing strength, requiring no equipment while training the upper body and core together as one unit.',
		positions: ['FLOOR', 'PRONE'],
		muscles: ['CORE', 'SHOULDER_GIRDLE', 'PECS', 'DELTS'],
		bodyParts: ['ARMS', 'CORE', 'SHOULDERS'],
		bodySections: ['CORE', 'SHOULDERS', 'ARMS'],
		variations: ['ON_KNEES', 'ON_THE_WALL', 'INCLINED', 'DECLINED', 'SLOW', 'LOW_IMPACT'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'STABILITY'],
		emojis: [handEmoji, armEmoji]
	},
	{
		name: 'REVERSE_ARM_CIRCLES',
		description:
			'Reverse arm circles are a shoulder mobility and warm-up movement where you extend your arms to the sides and rotate them backward in controlled circles. They engage the deltoids, the upper-back muscles, and the rotator cuff while opening the chest and counteracting the rounded-shoulder posture that comes from sitting. Stand tall with your arms straight out at shoulder height, then circle them backward, starting small and gradually increasing the size of the circles. Keep your shoulders down away from your ears, your core engaged, and avoid arching your lower back. Move smoothly and at a controlled pace rather than swinging. Pair them with forward circles to balance the shoulders in both directions. Reverse arm circles warm up the shoulder joint before pressing or pulling, improve posture by activating the upper back, and offer a quick way to relieve shoulder tightness anywhere.',
		positions: ['STANDING', 'KNEELING'],
		muscles: ['SHOULDER_GIRDLE'],
		bodyParts: ['SHOULDERS'],
		bodySections: ['SHOULDERS'],
		variations: ['SLOW', 'LOW_IMPACT', 'CROSSED_ARMS', 'ON_KNEES'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
		emojis: [armEmoji]
	},
	{
		name: 'REVERSE_FLY',
		description:
			'The reverse fly is an upper-back and shoulder exercise where you hinge forward and raise your arms out to the sides in a wide arc. It targets the rear deltoids along with the rhomboids and middle trapezius, the muscles that retract your shoulder blades and counter the forward rounding caused by desk work and pressing exercises. Hold light dumbbells, hinge at the hips with a flat back and a slight bend in your knees and elbows, then lift your arms out to the sides until they reach shoulder height, squeezing your shoulder blades together. Lead with your elbows, keep your shoulders down rather than shrugging, and lower under control. Use light weight and avoid swinging or using momentum. The reverse fly builds the often-neglected rear delts and upper back, improving posture, shoulder health, and balance against all your pushing movements.',
		positions: ['STANDING', 'KNEELING', 'SEATED'],
		muscles: ['LATS', 'TRAPS', 'ERECTOR_SPINAE', 'SHOULDER_GIRDLE'],
		bodyParts: ['UPPER_BACK', 'SHOULDERS'],
		bodySections: ['BACK', 'SHOULDERS'],
		variations: ['ON_KNEES', 'SEATED', 'LOW_IMPACT'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
		emojis: [armEmoji]
	},
	{
		name: 'SCISSOR_KICKS',
		description:
			'Scissor kicks are a core exercise where you lie on your back and cross your straight legs over and under each other in a horizontal scissoring motion. They target the lower abs and hip flexors while the crossing pattern also recruits the inner-thigh adductors and demands extra anti-rotation stability through the deep core. Lie flat with your hands under your glutes, lift your legs a few inches off the floor, and alternate crossing one leg over the other while keeping them straight. Press your lower back firmly into the floor throughout and keep the motion controlled rather than frantic. If your back begins to arch, raise your legs higher to reduce the strain. Keep your head and neck relaxed on the mat. Scissor kicks build lower-ab endurance and inner-thigh strength, offering a slightly more demanding variation than flutter kicks.',
		positions: ['FLOOR', 'SUPINE'],
		muscles: ['CORE', 'ABDUCTORS', 'ADDUCTORS'],
		bodyParts: ['CORE'],
		bodySections: ['CORE'],
		variations: ['CROSSED_LEGS', 'BENT_KNEES'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
		emojis: [legEmoji]
	},
	{
		name: 'SEATED_CALF_RAISES',
		description:
			'Seated calf raises are a lower-leg exercise where you raise your heels while seated with your knees bent around ninety degrees. Because the bent knee puts the gastrocnemius on slack, this version shifts the emphasis onto the soleus, the deeper calf muscle that runs the length of your lower leg and is heavily involved in standing, walking, and endurance. Sit with the balls of your feet on a platform and weight resting just above your knees, then press up onto your toes as high as you can, pause, and lower slowly through a full range for a deep stretch at the bottom. Avoid bouncing and keep the motion controlled. Train the soleus alongside standing calf raises for complete lower-leg development. A strong soleus supports posture, ankle stability, and the kind of sustained, low-level effort your calves perform all day.',
		positions: ['SEATED'],
		muscles: ['CALVES'],
		bodyParts: ['LOWER_LEG'],
		bodySections: ['LEGS'],
		variations: ['STANDING', 'ALTERNATING', 'SINGLE_LEGGED', 'SLOW', 'LOW_IMPACT'],
		demos: ['https://youtu.be/sp0R2tfjEOo?si=qc3uWFXDsMhehTUS'],
		embeds: ['sp0R2tfjEOo?si=ObcEZqC7ExvHn_Zv'],
		categories: ['CALISTHENICS', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'SHOULDER_TAPS',
		description:
			'Shoulder taps are a core-stability exercise performed in a high plank, where you lift one hand to tap the opposite shoulder while keeping the rest of your body still. They are an anti-rotation movement, training the deep core, including the transverse abdominis and obliques, while the shoulders, triceps, and glutes work to keep you stable. Start in a plank with hands under your shoulders and feet about hip-width or slightly wider for a stable base, brace your core, and slowly lift one hand to tap the opposite shoulder without letting your hips rock or twist. Keep your hips square to the floor and move deliberately rather than quickly. Return the hand and alternate sides. The challenge is resisting rotation as your weight shifts to one arm. Shoulder taps build core control, shoulder stability, and the kind of anti-rotational strength that supports real-world movement.',
		positions: ['STANDING'],
		muscles: ['DELTS', 'TRICEPS'],
		bodyParts: ['SHOULDERS', 'ARMS'],
		bodySections: ['SHOULDERS', 'ARMS'],
		variations: ['ON_KNEES', 'SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'STABILITY'],
		emojis: [bodyEmoji]
	},
	{
		name: 'SIDE_PLANKS',
		description:
			"Side planks, also called the side bridge and one of Dr. Stuart McGill's Big 3 core exercises, are an isometric hold where you support your body in a straight line on one forearm and the side of one foot. They primarily target the obliques and the deep stabilizer quadratus lumborum, while the glutes, especially the gluteus medius, and the shoulder work to hold the position. Set your elbow directly under your shoulder, stack or stagger your feet, and lift your hips so your body forms a straight line from head to feet. Keep your hips high so they do not sag, and keep your neck in line with your spine. Side planks build lateral core strength and hip stability the standard plank misses, supporting your spine against side bending.",
		positions: ['FLOOR', 'SIDE'],
		muscles: ['CORE', 'EXTERNAL_OBLIQUES', 'INTERNAL_OBLIQUES'],
		bodyParts: ['CORE'],
		bodySections: ['CORE'],
		variations: ['ALTERNATING', 'SLOW', 'LOW_IMPACT', 'CROSSED_LEGS'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'STABILITY'],
		emojis: [abdominEmoji]
	},
	{
		name: 'SPEED_SKATERS',
		description:
			'Speed skaters are a lateral plyometric exercise where you bound from side to side, landing on one leg and swinging the other behind you, mimicking the stride of an ice skater. They build the glutes, quads, hamstrings, and calves while training lateral power, balance, and the hip and ankle stability that most forward-and-back exercises neglect. From an athletic stance, push off one foot and leap sideways, landing softly on the opposite foot with a bent knee while the trailing leg sweeps behind you. Land quietly and absorb the impact, keeping your knee from caving inward and your hips facing forward. Swing your arms across your body for momentum and immediately bound back the other way. Start with smaller hops and build distance as your control improves. Speed skaters develop side-to-side athleticism, coordination, and conditioning valuable for almost any sport.',
		positions: ['STANDING'],
		muscles: ['GLUTES', 'QUADS', 'HAMSTRINGS', 'CALVES', 'CORE'],
		bodyParts: ['CORE', 'UPPER_LEG', 'LOWER_LEG', 'ANKLES'],
		bodySections: ['CORE', 'LEGS', 'FEET'],
		variations: ['SLOW', 'ALTERNATING', 'SINGLE_LEGGED', 'STANDING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
		emojis: [bodyEmoji]
	},
	{
		name: 'SQUATS',
		description:
			'Squats are a fundamental lower-body exercise where you bend your knees and hips to lower your body as if sitting back into a chair, then stand back up. They build the quadriceps, glutes, and hamstrings while engaging the core and lower back to keep you upright. Stand with feet about shoulder-width apart, brace your core, and lower by pushing your hips back and bending your knees until your thighs reach at least parallel, keeping your chest up and your knees tracking over your toes. Drive back up through your whole foot, squeezing your glutes at the top. Keep your heels planted and avoid letting your knees collapse inward or your back round. Squats are one of the most effective movements for building lower-body strength and carry over directly to standing, lifting, and nearly every athletic action.',
		positions: ['STANDING'],
		muscles: ['HAMSTRINGS', 'QUADS'],
		bodyParts: ['UPPER_LEG', 'ANKLES', 'LOWER_LEG'],
		bodySections: ['LEGS', 'FEET'],
		variations: ['SINGLE_LEGGED', 'STANDING', 'SLOW', 'LOW_IMPACT'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
		emojis: [footEmoji, legEmoji]
	},
	{
		name: 'SUPERHUMANS',
		description:
			'Superhumans, commonly known as the superman exercise, are a posterior-chain movement where you lie face down and lift your arms, chest, and legs off the floor at once. The main target is the erector spinae of the lower back, with the glutes, hamstrings, and upper back all contributing to hold the extended position. Lie prone with your arms extended ahead of you, then raise your arms, chest, and legs a few inches off the floor by contracting your back and glutes, holding briefly before lowering with control. Keep your neck neutral by gazing at the floor rather than craning upward, and avoid overarching by lifting only as high as feels comfortable. Engage your core throughout to protect your spine. Superhumans strengthen the whole back of the body, supporting posture and spinal stability and helping counter the effects of sitting hunched forward.',
		positions: ['PRONE'],
		muscles: ['ERECTOR_SPINAE', 'GLUTES', 'DELTS'],
		bodyParts: ['LOWER_BACK', 'UPPER_BACK', 'SHOULDERS'],
		bodySections: ['BACK'],
		variations: ['SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS'],
		emojis: [bodyEmoji, superheroEmoji]
	},
	{
		name: 'TOE_CURLS',
		description:
			'Toe curls are a foot-strengthening exercise where you curl your toes downward, often to scrunch a towel or grip the floor, to build the muscles that control your toes and support your arch. They work the toe flexors and intrinsic foot muscles, including the flexor digitorum brevis, which contribute to balance, push-off, and shock absorption. Sit or stand barefoot, place a small towel under your foot, and use your toes to gather it toward you, then release and repeat. Move deliberately and keep the rest of your leg relaxed so the work stays in the foot. It may feel like the foot wants to cramp at first, which eases as the muscles strengthen. Strong toe flexors improve foot stability and can help with conditions like plantar fasciitis and flat feet, building a more resilient foundation from the ground up.',
		positions: ['STANDING', 'SEATED', 'SUPINE', 'FLOOR'],
		muscles: ['FLEXORS'],
		bodyParts: ['FEET', 'TOES'],
		bodySections: ['FEET'],
		variations: ['SEATED', 'STANDING', 'SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: ['https://youtu.be/DE3bRURe22I?si=DgjT4DsdVorRMLXf'],
		embeds: ['DE3bRURe22I?si=jDWd3LIBpu333xE0'],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [footEmoji]
	},
	{
		name: 'TOE_RAISES',
		description:
			'Toe raises are a lower-leg exercise where you lift your toes and the front of your foot upward while keeping your heels planted. The movement is driven by the tibialis anterior, the muscle running down the front of your shin, which handles ankle dorsiflexion and helps clear your foot off the ground when you walk. Stand tall, keep your heels down, and raise your toes and forefoot as high as you can, feeling your shins work, then lower slowly under control. You can lean lightly against a wall for balance or perform them seated. Focus on a full range and avoid rocking your body backward to cheat the lift. Strengthening the tibialis anterior helps prevent shin splints, improves ankle stability and balance, and supports deeper squats by allowing your knees to travel forward over your toes.',
		positions: ['STANDING', 'SEATED', 'SUPINE', 'FLOOR'],
		muscles: ['EXTENSORS'],
		bodyParts: ['FEET', 'TOES'],
		bodySections: ['FEET'],
		variations: ['SEATED', 'STANDING', 'SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: ['https://youtu.be/5oi3PoEu4W0?si=TihfSnKEV9ZyaFVJ'],
		embeds: ['5oi3PoEu4W0?si=vG4nW_v6LBfMP5Zp'],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [footEmoji]
	},
	{
		name: 'TOE_SPLAYS',
		description:
			'Toe splays are a foot-strengthening drill where you spread your toes apart as wide as you can, then bring them back together. The movement targets the intrinsic foot muscles, especially the abductor hallucis that controls the big toe, building the strength and control needed for balance, stability, and a healthy foot foundation. Sit or stand barefoot with your feet flat, then actively fan your toes apart without curling or lifting them, hold the spread briefly, and release. Performing them while bearing weight increases the activation of the big-toe abductor. Move slowly and deliberately, since this kind of fine toe control is unfamiliar at first and improves with practice. Toe splays help counter the cramped position that narrow shoes impose, support the arch, and are often used to address bunions and improve overall foot function from the ground up.',
		positions: ['STANDING', 'SEATED', 'SUPINE', 'FLOOR'],
		muscles: [],
		bodyParts: ['FEET', 'TOES'],
		bodySections: ['FEET'],
		variations: ['SEATED', 'STANDING', 'SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: ['https://youtu.be/GqPf7zppOR4?si=6Z0BZf-lUFPEKdCU'],
		embeds: ['GqPf7zppOR4?si=hB70ZzcrPpCuzQGf'],
		categories: ['MOBILITY', 'STABILITY'],
		emojis: [footEmoji]
	},
	{
		name: 'TOE_TOUCHES',
		description:
			'Toe touches are a flexibility and core movement where you reach toward your toes to stretch and strengthen depending on how you perform them. As a standing or seated stretch, they lengthen the hamstrings and lower back; performed lying on your back reaching your hands toward raised feet, they become a core exercise targeting the upper abdominals. For the stretch, hinge at your hips with a flat back and reach toward your toes without forcing or bouncing, easing into the position. For the lying version, raise your legs toward the ceiling and crunch your shoulders off the floor to reach for your toes, keeping your lower back down. Move under control in both variations. Toe touches improve the flexibility of the posterior chain or build abdominal strength, so use the version that matches your goal and keep the motion smooth rather than jerky.',
		positions: ['FLOOR', 'SUPINE'],
		muscles: ['CORE'],
		bodyParts: ['ABDOMINAL'],
		bodySections: ['CORE'],
		variations: ['LOW_IMPACT', 'SLOW', 'CROSSED_LEGS'],
		demos: ['https://youtu.be/9iEI95-eZWk?si=CCrVK6oH8tiAWI8r'],
		embeds: ['9iEI95-eZWk?si=64K8GFopUSGluB5x'],
		categories: ['MOBILITY', 'STABILITY', 'YOGA'],
		emojis: [legEmoji]
	},
	{
		name: 'UPWARD_DOG_POSES',
		description:
			'Upward dog poses are a backbend yoga position where you lie face down and press through your hands to lift your chest and thighs off the floor, arching your spine. The pose strengthens the arms, wrists, and shoulders while stretching the chest, abdominals, and hip flexors, and engaging the back muscles. From lying prone, place your hands beside your lower ribs, press down to straighten your arms, and lift your torso and legs so only your hands and the tops of your feet touch the floor. Roll your shoulders down and back away from your ears, lengthen your neck rather than throwing your head back, and keep your thighs active and lifted. Avoid compressing your lower back by gently engaging your core. Upward dog opens the chest and front of the body, counters hunched posture, and builds upper-body strength within a flowing practice.',
		positions: ['FLOOR', 'PRONE'],
		muscles: ['TRICEPS', 'ERECTOR_SPINAE', 'GLUTES'],
		bodyParts: ['ARMS', 'UPPER_BACK', 'LOWER_BACK'],
		bodySections: ['ARMS', 'BACK', 'HIPS'],
		variations: ['SLOW', 'LOW_IMPACT'],
		demos: ['https://www.youtube.com/watch?v=cIX73v498u4'],
		embeds: ['cIX73v498u4?si=2eb2qW27X8xdo9rG'],
		categories: ['YOGA'],
		emojis: [yogaEmoji]
	},
	{
		name: 'TRUNK_TWISTS',
		description:
			'Trunk twists are a rotational mobility and core movement where you rotate your torso from side to side to loosen the spine and engage the obliques. They mobilize the thoracic spine and activate the oblique muscles along the sides of your waist, warming the midsection and improving rotational range. Stand with feet shoulder-width apart and knees soft, brace your core, then rotate your torso to one side and then the other in a controlled rhythm, letting your arms swing naturally with the movement. Keep your hips relatively stable so the rotation comes from your trunk rather than just swinging your whole body. Move smoothly and avoid forcing the range or twisting sharply. Trunk twists prepare the spine and core for rotational activity, relieve stiffness from sitting, and reinforce the rotational mobility that supports sports, lifting, and everyday turning and reaching.',
		positions: ['FLOOR', 'SUPINE'],
		muscles: ['CORE', 'EXTERNAL_OBLIQUES', 'INTERNAL_OBLIQUES'],
		bodyParts: ['CORE'],
		bodySections: ['CORE'],
		variations: ['STANDING', 'LOW_IMPACT', 'SLOW', 'ALTERNATING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
		emojis: [bodyEmoji]
	},
	{
		name: 'WALKOUT_PLANKS',
		description:
			'Walkout planks, also called inchworms, are a full-body movement where you bend forward, walk your hands out into a plank, then walk them back and stand up. They engage the core, shoulders, chest, and triceps as you hold and travel through the plank, while stretching the hamstrings and calves during the hinge. Stand tall, hinge at your hips to place your hands on the floor, then walk them forward until you reach a strong plank with your body in a straight line. Keep your core braced so your hips do not sag, pause briefly, then walk your hands back toward your feet and rise. Bend your knees if your hamstrings are tight, and move slowly and deliberately. Walkout planks build core stability and upper-body strength while improving mobility, making them an effective dynamic warm-up or a low-impact conditioning move.',
		positions: ['PRONE'],
		muscles: ['SHOULDER_GIRDLE', 'CORE'],
		bodyParts: ['SHOULDERS', 'CORE'],
		bodySections: ['ARMS', 'CORE'],
		variations: ['SLOW', 'LOW_IMPACT', 'ALTERNATING'],
		demos: [''],
		embeds: [''],
		categories: ['CALISTHENICS', 'MOBILITY', 'STABILITY'],
		emojis: [bodyEmoji]
	},
	{
		name: 'WRIST_CIRCLES',
		description:
			'Wrist circles are a joint mobility movement where you rotate your hands at the wrists to loosen the joint and warm the surrounding forearm muscles. They improve range of motion and circulation through the wrists and forearms, preparing them for any exercise that loads the hands, such as push-ups, planks, or pulling movements. Extend your arms or clasp your hands together, then rotate your wrists in slow, controlled circles, moving through the full comfortable range. Make several rotations in one direction, then reverse. Keep the motion smooth and unforced, and relax your shoulders. Wrist circles are especially useful before any weight-bearing work on your hands, and they offer quick relief for stiffness that builds from typing, gripping, or repetitive hand use throughout the day. Use them as part of a warm-up or as a brief reset during long desk sessions.',
		positions: ['STANDING', 'SEATED', 'KNEELING'],
		muscles: ['FOREARM', 'EXTENSORS', 'FLEXORS'],
		bodyParts: ['FOREARMS'],
		bodySections: ['ARMS'],
		variations: ['SLOW', 'LOW_IMPACT', 'SEATED', 'ON_KNEES', 'ALTERNATING'],
		demos: ['https://youtu.be/2nIqcxAyBh4?si=rj8JW3XPhHRfXyS-'],
		embeds: ['2nIqcxAyBh4?si=xmosRzdrTv0HBfXz'],
		categories: ['CALISTHENICS', 'MOBILITY'],
		emojis: [handEmoji]
	},
	{
		name: 'WRIST_ROLLS',
		description:
			'Wrist rolls are a mobility and light-strengthening movement where you roll your wrists through their range to loosen the joints and activate the forearm muscles. They warm the wrists and forearms and build the supple, resilient joints needed for bodyweight work that loads the hands, like planks, push-ups, and bear crawls. Hold your arms out and slowly roll your wrists in full circles, or curl and extend your hands to work the joint through its range, keeping the motion controlled and your forearms relaxed. Move in both directions for balance. Keep the pace slow and never force the joint past a comfortable range. Wrist rolls prepare the wrists before any hand-supported exercise and help relieve the tightness that accumulates from gripping and typing. Performed regularly, they keep the wrists mobile and better able to tolerate the demands of training.',
		positions: ['STANDING', 'SEATED', 'KNEELING'],
		muscles: ['FOREARM', 'EXTENSORS', 'FLEXORS'],
		bodyParts: ['FOREARMS'],
		bodySections: ['ARMS'],
		variations: ['SLOW', 'LOW_IMPACT', 'SEATED', 'ON_KNEES', 'ALTERNATING'],
		demos: ['https://youtu.be/2nIqcxAyBh4?si=rj8JW3XPhHRfXyS-'],
		embeds: ['2nIqcxAyBh4?si=xmosRzdrTv0HBfXz'],
		categories: ['CALISTHENICS', 'MOBILITY'],
		emojis: [handEmoji]
	}
];
