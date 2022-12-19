<script lang="ts">
    import FormInput from '$lib/components/FormInput.svelte'
    import ButtonComponent from '$lib/components/Button.svelte'
</script>

<div class="relative">
    <div
        class="flex flex-col items-center bg-dark-900 p-8 w-[400px] rounded-lg"
    >
        <h1 class="font-bold font-rubik text-white text-4xl">Faça login</h1>
        <FormInput
            label="E-mail"
            placeholder="Insira seu e-mail"
            invalidText="E-mail inválido. Tente novamente"
            validate="{(e) =>
        e?.length > 2}"
            autocomplete="{false}"
            block
        />

        <FormInput
            label="Senha"
            placeholder="Insira sua senha"
            type="password"
            invalidText="Senha inválida. Tente novamente"
            validate="{(e) =>
        e?.length > 2}"
            autocomplete="{false}"
            block
        />

        <div class="w-full mt-4">
            <ButtonComponent background block>Logar</ButtonComponent>
        </div>
    </div>
</div>
